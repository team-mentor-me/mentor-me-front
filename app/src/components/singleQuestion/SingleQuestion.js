import React from "react";
import { connect } from "react-redux";

// const question = {
//   question: "How to use GrapQL in a react app?",
//   description:
//     "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.",
//   id: "1",
//   category: "photography",
//   user: {
//     name: "Lucy Lee",
//     photoUrl:
//       "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//   }
// };

function SingleQuestion(props) {
  console.log(props.question);
  return <div>{props.question.question}</div>;
}

const mapStateToProps = (state, ownProps) => ({
  question: state.questions.find(q => q.id === ownProps.match.params.id)
});

export default connect(mapStateToProps)(SingleQuestion);
