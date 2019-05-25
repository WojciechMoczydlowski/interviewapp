import { ADD_USER, DELETE_USER, DELETE_USER_LIST } from "./types";

export const addUser = payload => ({
  type: ADD_USER,
  payload
});
export const deleteUser = payload => ({
  type: DELETE_USER,
  payload
});

export const deleteUserList = () => ({
  type: DELETE_USER_LIST
});
