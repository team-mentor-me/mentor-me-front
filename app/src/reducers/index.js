import { LOGIN_ATTEMPT, LOGIN_SUCCESS } from "../actions/types";

// change back to false - isLoggedIn
const initialStore = {
  questions: [],
  isLoggedIn: true,
  loadingAuth: null
};

export default (state = initialStore, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return { ...state, loadingAuth: true };
    case LOGIN_SUCCESS:
      return { ...state, loadingAuth: false, isLoggedIn: true };
    default:
      return state;
  }
};
