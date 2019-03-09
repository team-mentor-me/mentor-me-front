import { LOGIN_ATTEMPT, LOGIN_SUCCESS } from "./types";

export const login = formVals => async dispatch => {
  dispatch({ type: LOGIN_ATTEMPT });
  setTimeout(() => dispatch({ type: LOGIN_SUCCESS }), 1000);
};
