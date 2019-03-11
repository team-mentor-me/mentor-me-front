// change back to false - isLoggedIn
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import questionReducer from "./questionsReducer";

export default combineReducers({
  questions: questionReducer,
  currentUser: userReducer
});
