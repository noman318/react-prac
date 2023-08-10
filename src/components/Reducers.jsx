import React, { useReducer } from "react";
import { INITIAL_POST_STATE, PostReducer } from "../reducers/postReducer";

const Reducers = () => {
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [state, dispatch] = useReducer(PostReducer, INITIAL_POST_STATE);
  const getPost = () => {
    dispatch({ type: "FETCH_START" });
    // setLoading(true);
    // setError(false);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });
        // setLoading(false);
        // setError(false);
        // setData(data);
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
        // setError(true);
        // setLoading(false);
        // setError(err);
      });
    console.log("state", state);
  };
  return (
    <div>
      <h2>Reducers</h2>
      {state.error ? <></> : <h3>{state?.post?.title}</h3>}
      <button onClick={getPost} disabled={state.loading}>
        {state.loading ? "Wait" : "Fetch Post"}
      </button>
      {state.error && <p>Something went wrong</p>}
    </div>
  );
};

export default Reducers;
