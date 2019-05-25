import {
  HANDLE_NICKAME_ERROR,
  HANDLE_EMAIL_ERROR,
  HANDLE_IPADRESS_ERROR,
} from "./types";

export const showNicknameError = (payload) => ({
  type: HANDLE_NICKAME_ERROR,
  payload
});

export const showEmailError = (payload) => ({
  type: HANDLE_EMAIL_ERROR,
  payload
});

export const showIpadressError = (payload) => ({
  type: HANDLE_IPADRESS_ERROR,
  payload
});
