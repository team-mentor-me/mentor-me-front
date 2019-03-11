import axios from "axios";
import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  ADD_QUESTION,
  ADD_MESSAGE
} from "./types";

export const login = formVals => async dispatch => {
  console.log("running");
  dispatch({ type: LOGIN_ATTEMPT });
  const res = await axios.post(
    `https://bw-mentor-me.herokuapp.com/api/login`,
    formVals
  );
  console.log(res);
  localStorage.setItem("mentorMeToken", res.token);
  dispatch({ type: LOGIN_SUCCESS });
};

export const signup = formVals => async dispatch => {
  const vals = { ...formVals, role: "mentor" };
  dispatch({ type: LOGIN_ATTEMPT });
  const res = await axios.post(
    `https://bw-mentor-me.herokuapp.com/api/register`,
    vals
  );
  console.log(res);
  console.log(res.message);
  localStorage.setItem("mentorMeToken", res.token);
  dispatch({ type: LOGIN_SUCCESS });
};

export const addQuestion = formVals => async dispatch => {
  dispatch({ type: ADD_QUESTION, payload: formVals });
};

export const addMessage = formVals => async dispatch => {
  dispatch({ type: ADD_MESSAGE, payload: formVals });
};
