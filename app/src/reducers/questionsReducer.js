import {
  ADD_QUESTION_ATTEMPT,
  ADD_QUESTION_SUCCESS,
  FETCH_QUESTIONS_ATTEMPT,
  FETCH_QUESTIONS_SUCCESS,
  DELETE_QUESTION_SUCCESS
} from "../actions/types";

const initialStore = {
  questions: [],
  fetchingQs: false,
  addingQ: false
};

export default (state = initialStore, action) => {
  switch (action.type) {
    case ADD_QUESTION_ATTEMPT:
      return { ...state, addingQ: true };
    case ADD_QUESTION_SUCCESS:
      return { ...state, addingQ: false };
    case FETCH_QUESTIONS_ATTEMPT:
      return { ...state, fetchingQs: true };
    case FETCH_QUESTIONS_SUCCESS:
      return { ...state, questions: action.payload, fetchingQs: false };
    case DELETE_QUESTION_SUCCESS:
      console.log("deleted success");
      return state;
    default:
      return state;
  }
};
