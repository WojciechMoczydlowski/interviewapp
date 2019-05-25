import { ADD_USER, DELETE_USER, DELETE_USER_LIST } from "../actions/types";

const users = [{}];

const userListReducer = (state = users, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state
      };
    case DELETE_USER:
      const weather = action.payload;
      return {
        ...state
      };
    case DELETE_USER_LIST:
      return {
        ...state
      };
    default:
      return state;
  }
};
export default userListReducer;
