import React, { useReducer } from "react";
import { INITIAL_POST_STATE, postReducer } from "../reducers/postReducer";

const Reducer = () => {
  // const [data, setData] = useState();
  // const [error, setError] = useState();
  // const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(postReducer, INITIAL_POST_STATE);
  const fetchData = () => {
    // console.log("fetch click");
    // setLoading(true);
    dispatch({ type: "FETCH_START" });
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data });

        // setData(data);
        // // console.log("data", data);
        // setLoading(false);
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
        // setError(error);
        // setLoading(false);
      });
    // .finally(() => setLoading(false));
  };
  return (
    <div>
      <h1>Reducer</h1>
      <button onClick={fetchData}>
        {state.loading ? "Wait" : "Fetch Post Data"}
      </button>
      <h5>{state?.post?.title}</h5>
      <span>{state.error && "Error occured"}</span>
    </div>
  );
};

export default Reducer;
