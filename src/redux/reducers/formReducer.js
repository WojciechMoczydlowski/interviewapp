import {
  CHANGE_NICKNAME,
  CHANGE_EMAIL,
  CHANGE_IPADRESS
} from "../actions/types";

const formDate = {
  nickname: "",
  email: "",
  ipadress: "",
};

const formReducer = (state = formDate, action) => {
  switch (action.type) {
    case CHANGE_NICKNAME:
      const newNickname = state.nickname + action.payload;
      return {
        ...state,
        nickname: newNickname
      };
    case CHANGE_EMAIL:
      const newEmail = state.email + action.payload;
      return {
        ...state,
        email: newEmail
      };
    case CHANGE_IPADRESS:
      const newIpadress = state.ipadress + action.payload;
      return {
        ...state,
        ipadress: newIpadress
      };
    default:
      return state;
  }
};
export default formReducer;
