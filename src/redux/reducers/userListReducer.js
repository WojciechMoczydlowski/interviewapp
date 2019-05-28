import { ADD_USER, DELETE_USER, DELETE_USER_LIST } from "../actions/types";

const users = {
  usersArr: [],
};

const userListReducer = (state = users, action) => {
  switch (action.type) {
    case ADD_USER:
      const user = {
        nickname: action.payload.nickname,
        email: action.payload.email,
        ipadress: action.payload.ipadress,
      };
      const newUsersArr = [...state.usersArr, user];
      return {
        ...state,
        usersArr: newUsersArr
      };
    case DELETE_USER:
      return {
        ...state,   
      };
    case DELETE_USER_LIST:
        const emptyArr = [];
        return {
          ...state,
          usersArr: emptyArr,
        };
    default:
      return state;
  }
};
export default userListReducer;
