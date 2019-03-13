import {
  ADD_MESSAGE,
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGOUT,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_ATTEMPT,
} from "../actions/types";

const initialState = {
  photoUrl: "",
  fullName: "",
  id: null,
  about: "",
  messages: [
    {
      withWho: {
        name: "Michael Stewart",
        photoUrl:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      id: "21",
      listOfMessages: [
        {
          date: "12/12/2018",
          text: "Hi, what's up",
          user: { name: "Michael Stewart", id: "3" },
          id: "3"
        },
        {
          date: "12/12/2018",
          text: "All good, and you?",
          user: { name: "Joe Beans", id: "6" },
          id: "4"
        }
      ]
    },
    {
      withWho: {
        name: "Lucy Lee",
        photoUrl:
          "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      id: "22",
      listOfMessages: [
        {
          date: "8/12/2019",
          text: "Can we talk about photography?",
          user: { name: "Joe Beans", id: "6" },
          id: "1"
        },
        {
          date: "9/12/2019",
          text: "Sure, what interests you the most?",
          user: { name: "Lucy Lee", id: "1" },
          id: "2"
        }
      ]
    }
  ],
  role: "",
  isLoggedIn: true,
  loadingAuth: null,
  profileToShow: null
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
        isLoggedIn: true,
        loadingAuth: false
      };
      return newUser;
    case FETCH_PROFILE_ATTEMPT: 
      return { ...state, profileToShow: false}
    case FETCH_PROFILE_SUCCESS:
      return { ...state, profileToShow: action.payload };
    
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
