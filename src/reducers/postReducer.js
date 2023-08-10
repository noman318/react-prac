export const INITIAL_POST_STATE = {
  post: {},
  loading: false,
  error: false,
};

export const PostReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        error: false,
        post: {},
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: false,
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: true,
        post: {},
      };
    default:
      return state;
  }
};
