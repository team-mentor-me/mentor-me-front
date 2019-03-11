import { ADD_MESSAGE, LOGIN_ATTEMPT, LOGIN_SUCCESS } from "../actions/types";

const initialState = {
  photoUrl:
    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/117671116/original/9d8e9cbd1b9419204923f4706eefd6817fcc4a78/design-minimalist-flat-line-vector-avatar.jpg",
  fullName: "Joe Beans",
  id: "6",
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
  status: "mentor",
  isLoggedIn: true,
  loadingAuth: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return { ...state, loadingAuth: true };
    case LOGIN_SUCCESS:
      return { ...state, loadingAuth: false, isLoggedIn: true };
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
