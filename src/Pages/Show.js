import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router";
import { apiGet } from "../misc/config";
import NOT_FOUND from "../images/not-found.png";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

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
const Show = () => {
  const { id } = useParams();
  const [{ loading, data, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    let isMount = true;

    dispatch({
      type: "FETCH_LOADING",
    });
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
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
  }, [id]);
  return (
    <div>
      {loading && "Loading"}
      {data && <img src={data.image?.medium ?? NOT_FOUND} alt={data.name} />}
      {error && `error is ${error}`}
    </div>
  );
};

export default Show;
