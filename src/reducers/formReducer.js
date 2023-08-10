export const INITIAL_FORM_STATE = {
  title: "",
  desc: "",
  price: 0,
  category: "",
  tags: [],
  images: {
    sm: "",
    md: "",
    lg: "",
  },
  quantity: 0,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_TAGS":
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case "REMOVE_TAGS":
      return {
        ...state,
        tags: state?.tags?.filter((tag) => tag !== action.payload),
      };
    case "INCREASE":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "DECREASE":
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default: {
      return state;
    }
  }
};
