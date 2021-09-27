import { useReducer, useEffect, useState } from "react";
import { apiGet } from "./config";

function showsReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.showId];
    case "REMOVE":
      return state.filter((showId) => showId !== action.showId);

    default:
      return state;
  }
}

function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export function useShows(key = "shows") {
  return usePersistedReducer(showsReducer, [], key);
}

export function useLastQuery(key = "lastQuery") {
  const [input, setInput] = useState(() => {
    const persisted = sessionStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : "";
  });

  const setPersisitedInput = (newState) => {
    setInput(newState);
    sessionStorage.setItem(key, JSON.stringify(newState));
  };
  return [input, setPersisitedInput];
}

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LOADING":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: "" };
    case "FETCH_ERROR":
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export function useShow(showId) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: [],
    error: "",
  });
  useEffect(() => {
    let isMount = true;

    dispatch({
      type: "FETCH_LOADING",
    });
    apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`)
      .then((res) => {
        if (isMount) {
          console.log(res);
          dispatch({
            type: "FETCH_SUCCESS",
            payload: res,
          });
        }
      })
      .catch((error) =>
        dispatch({
          type: "FETCH_ERROR",
          payload: error.message,
        })
      );
    return () => {
      isMount = false;
    };
  }, [showId]);

  return state;
}
