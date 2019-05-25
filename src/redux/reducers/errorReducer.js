import {
  HANDLE_NICKAME_ERROR,
  HANDLE_EMAIL_ERROR,
  HANDLE_IPADRESS_ERROR
} from "../actions/types";

const errors = {
  nicknameErrorDispay: false,
  nicknameErrorMessage: "",
  emailErrorDispay: false,
  emailErrorMessage: "",
  ipadressErrorDisplay: false,
  ipadressErrorMessage: ""
};

const errorReducer = (state = errors, action) => {
  switch (action.type) {
    case HANDLE_NICKAME_ERROR:
      return {
        ...state,
        nicknameErrorDispay: action.payload.showError,
        nicknameErrorMessage: action.payload.errorMessage
      };
    case HANDLE_EMAIL_ERROR:
      return {
        ...state,
        emailErrorDispay: action.payload.showError,
        emailErrorMessage: action.payload.errorMessage
      };
    case HANDLE_IPADRESS_ERROR:
      return {
        ...state,
        ipadressErrorDisplay: action.payload.showError,
        ipadressErrorMessage: action.payload.errorMessage
      };
    default:
      return state;
  }
};
export default errorReducer;
