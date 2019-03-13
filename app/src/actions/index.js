import axios from "axios";
import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  ADD_QUESTION_ATTEMPT,
  ADD_QUESTION_SUCCESS,
  ADD_MESSAGE,
  FETCH_QUESTIONS_ATTEMPT,
  FETCH_QUESTIONS_SUCCESS,
  DELETE_QUESTION_SUCCESS,
  LOGOUT,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_ATTEMPT,
  FETCH_QUESTION_ATTEMPT,
  FETCH_QUESTION_SUCCESS
} from "./types";

// axios.defaults.headers.common["Content-Type"] = "application/json";

const url = "https://bw-mentor-me.herokuapp.com";

export const login = formVals => async dispatch => {
  dispatch({ type: LOGIN_ATTEMPT });
  const res = await axios.post(`${url}/api/login`, formVals);
  localStorage.setItem("mentorMeToken", res.data.token);
  const res2 = await axios.get(`${url}/api/user/${res.data.user_id}`);
  console.log(res2.data);
  dispatch({ type: LOGIN_SUCCESS, payload: res2.data });
};

export const signup = formVals => async dispatch => {
  const vals = { ...formVals, role: "mentor" };
  dispatch({ type: LOGIN_ATTEMPT });
  const res = await axios.post(`${url}/api/register`, vals);
  localStorage.setItem("mentorMeToken", res.data.token);
  const res2 = await axios.get(`${url}/api/user/${res.data.user_id}`);
  console.log(res2.data);
  dispatch({ type: LOGIN_SUCCESS, payload: res2.data });
};

export const fetchQuestions = () => async dispatch => {
  dispatch({ type: FETCH_QUESTIONS_ATTEMPT });
  const res = await axios.get(`${url}/api/questions`, {
    headers: { Authorization: localStorage.getItem("mentorMeToken") }
  });
  console.log(res.data);
  dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: res.data });
};

export const fetchProfile = id => async dispatch => {
  dispatch({ type: FETCH_PROFILE_ATTEMPT });
  console.log("fetching ps");
  const res = await axios.get(`${url}/api/user/${id}`, {
    headers: { Authorization: localStorage.getItem("mentorMeToken") }
  });
  console.log(res.data);
  dispatch({ type: FETCH_PROFILE_SUCCESS, payload: res.data });
};

// export const addQuestion = (formVals, id) => async dispatch => {

export const addQuestion = formVals => async dispatch => {
  console.log(formVals);

  dispatch({ type: ADD_QUESTION_ATTEMPT });
  await axios.post(`${url}/api/posts`, formVals, {
    headers: { Authorization: localStorage.getItem("mentorMeToken") }
  });
  dispatch({ type: ADD_QUESTION_SUCCESS });
};

export const addMessage = formVals => async dispatch => {
  dispatch({ type: ADD_MESSAGE, payload: formVals });
};

export const deleteQuestion = id => async dispatch => {
  await axios.delete(`${url}/api/posts/${id}`, {
    headers: { Authorization: localStorage.getItem("mentorMeToken") }
  });
  dispatch({ type: DELETE_QUESTION_SUCCESS });
};

export const logout = id => async dispatch => {
  dispatch({ type: LOGOUT });
};

export const fetchQuestion = id => async dispatch => {
  dispatch({ type: FETCH_QUESTION_ATTEMPT });
  const res = await axios.get(`${url}/api/questions/${id}`, {
    headers: { Authorization: localStorage.getItem("mentorMeToken") }
  });
  dispatch({ type: FETCH_QUESTION_SUCCESS, payload: res.data });
};

// {
//   ...currentUser,
//   id: '9',
//   conversations: [
//     {
//       withWho: "Mike",
//       photo_parter: "",
//       conversation_id: "2",
//       messages: [
//         {
//           message_sender_id: '9',
//           message: 'whats up'
//         },
//         {
//           message_sender_id: '21',
//           message: 'all good'
//         }
//       ]
//      }
//   ]
// }
