import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Top from "./Top";
import Question from "./Question";

const questions = [
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
];

function Index(props) {
  console.log(props.isLoggedIn);
  if (!props.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Top />
      {questions.map(question => (
        <Question question={question} key={question.id} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(Index);
