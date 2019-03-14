import {
  ADD_MESSAGE,
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGOUT,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_ATTEMPT,
  FETCH_CONVERSATION_SUCCESS
} from "../actions/types";

const initialState = {
  photoUrl: "",
  fullName: "",
  id: null,
  about: "",
  role: "",
  isLoggedIn: true,
  loadingAuth: null,
  profileToShow: null,
  currentConversation: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    case LOGIN_ATTEMPT:
      return { ...state, loadingAuth: true };
    case LOGIN_SUCCESS:
      const newUser = {
        ...state,
        id: action.payload.user_id,
        fullName: action.payload.name,
        role: action.payload.role,
        photoUrl:
          action.payload.photo ||
          "https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png",
        about: action.payload.about,
        isLoggedIn: false,
        loadingAuth: false
      };
      return newUser;
    case FETCH_PROFILE_ATTEMPT: 
      return { ...state, profileToShow: false}
    case FETCH_PROFILE_SUCCESS:
      return { ...state, profileToShow: action.payload };
    case FETCH_CONVERSATION_SUCCESS:
      return { ...state, currentConversation: action.payload };
    case ADD_MESSAGE:
      const newMessages = state.messages.map(msg => {
        if (msg.withWho.name === action.payload.withWho) {
          return {
            ...msg,
            listOfMessages: [
              ...msg.listOfMessages,
              {
                date: "23456789",
                text: action.payload.text,
                user: {
                  name: state.fullName,
                  id: state.id
                },
                id: "9"
              }
            ]
          };
        }
        return msg;
      });
      return {
        ...state,
        messages: newMessages
      };
    default:
      return state;
  }
};
