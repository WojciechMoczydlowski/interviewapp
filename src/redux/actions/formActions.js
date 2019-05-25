import { CHANGE_NICKNAME, CHANGE_EMAIL, CHANGE_IPADRESS } from "./types";

export const changeNickname = payload => ({
  type: CHANGE_NICKNAME,
  payload
});
export const changeEmail = payload => ({
  type: CHANGE_EMAIL,
  payload
});

export const changeIpadress = payload => ({
  type: CHANGE_IPADRESS,
  payload
});
