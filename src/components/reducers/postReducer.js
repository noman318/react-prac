export const INITIAL_POST_STATE = {
  loading: false,
  post: {},
  error: false,
};

export const postReducer = (state, action) => {
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
//   if (action.type === "FETCH_START") {
//     return {
//       loading: true,
//       error: false,
//       post: {},
//     };
//   } else if (action.type === "FETCH_SUCCESS") {
//     return {
//       loading: false,
//       error: false,
//       post: action.payload,
//     };
//   } else if (action.type === "FETCH_ERROR") {
//     return {
//       loading: false,
//       error: true,
//       post: {},
//     };
//   }
