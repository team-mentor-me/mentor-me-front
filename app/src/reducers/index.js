import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  ADD_QUESTION,
  ADD_MESSAGE
} from "../actions/types";

// change back to false - isLoggedIn
const initialStore = {
  questions: [
    {
      question: "How to use GrapQL in a react app?",
      description:
        "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.",
      id: "1",
      category: "photography",
      user: {
        name: "Lucy Lee",
        photoUrl:
          "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }
    },
    {
      question: "Set up a rasberry pi",
      description:
        "The Raspberry Pi Foundation’s mission is to bring computing and digital making to everyone. Tackling the persistent gender imbalance in technology is a crucial part of this undertaking. As part of our work to increase the number of girls choosing to learn how to create with technology, we are marking International Women’s Day with a celebration of real role models.",
      id: "2",
      category: "computer science",
      user: {
        name: "Brandon Stewart",
        photoUrl:
          "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=9400"
      }
    },
    {
      question: "Use Github",
      description:
        "GitHub is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features.",
      id: "3",
      category: "computer science",
      user: {
        name: "Michael Stewart",
        photoUrl:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    }
  ],
  isLoggedIn: true,
  loadingAuth: null,
  currentUser: {
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
    status: "mentor"
  }
};

export default (state = initialStore, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return { ...state, loadingAuth: true };
    case LOGIN_SUCCESS:
      return { ...state, loadingAuth: false, isLoggedIn: true };
    case ADD_QUESTION:
      const newQuestions = [...state.questions, action.payload];
      return { ...state, questions: newQuestions };
    case ADD_MESSAGE:
      const newMessages = state.currentUser.messages.map(msg => {
        if (msg.withWho.name === action.payload.withWho) {
          return {
            ...msg,
            listOfMessages: [
              ...msg.listOfMessages,
              {
                date: "23456789",
                text: action.payload.text,
                user: {
                  name: state.currentUser.fullName,
                  id: state.currentUser.id
                },
                id: "9"
              }
            ]
          };
        }
        return msg;
      });
      console.log(newMessages);
      return {
        ...state,
        currentUser: { ...state.currentUser, messages: newMessages }
      };
    default:
      return state;
  }
};
