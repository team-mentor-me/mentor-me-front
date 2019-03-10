import { LOGIN_ATTEMPT, LOGIN_SUCCESS, ADD_QUESTION } from "./types";

export const login = formVals => async dispatch => {
  dispatch({ type: LOGIN_ATTEMPT });
  dispatch({ type: LOGIN_SUCCESS });
};

export const signup = formVals => async dispatch => {
  dispatch({ type: LOGIN_ATTEMPT });
  dispatch({ type: LOGIN_SUCCESS });
};

export const addQuestion = formVals => async dispatch => {
  dispatch({ type: ADD_QUESTION, payload: formVals });
};