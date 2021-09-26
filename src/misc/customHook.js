import { useReducer, useEffect } from "react";

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
