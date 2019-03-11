import axios from "axios";
import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  ADD_QUESTION,
  ADD_MESSAGE,
  FETCH_QUESTIONS_ATTEMPT,
  FETCH_QUESTIONS_SUCCESS
} from "./types";

axios.defaults.headers.common["Authorization"] = localStorage.getItem(
  "mentorMeToken"
);

const url = "https://bw-mentor-me.herokuapp.com";

export const login = formVals => async dispatch => {
  console.log("running");
  dispatch({ type: LOGIN_ATTEMPT });
  const res = await axios.post(`${url}/api/login`, formVals);
  console.log(res);
  localStorage.setItem("mentorMeToken", res.data.token);
  dispatch({ type: LOGIN_SUCCESS });
};

export const signup = formVals => async dispatch => {
  const vals = { ...formVals, role: "mentor" };
  dispatch({ type: LOGIN_ATTEMPT });
  const res = await axios.post(`${url}/api/register`, vals);
  console.log(res);
  console.log(res.message);
  localStorage.setItem("mentorMeToken", res.data.token);
  dispatch({ type: LOGIN_SUCCESS });
};

export const fetchQuestions = () => async dispatch => {
  dispatch({ type: FETCH_QUESTIONS_ATTEMPT });
  console.log("fetching qs");
  console.log(localStorage.getItem("mentorMeToken"));
  const res = await axios.get(`${url}/api/questions`, {
    headers: { Authorization: localStorage.getItem("mentorMeToken") }
  });
  console.log(res.data);
  dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: res.data });
};

export const addQuestion = formVals => async dispatch => {
  dispatch({ type: ADD_QUESTION, payload: formVals });
};

export const addMessage = formVals => async dispatch => {
  dispatch({ type: ADD_MESSAGE, payload: formVals });
};
