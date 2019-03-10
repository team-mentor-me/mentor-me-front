import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Top from "./Top";
import Question from "./Question";

function Index(props) {
  if (!props.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Top />

      {props.questions.map(question => (
        <Question question={question} key={question.id} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  questions: state.questions
});

export default connect(mapStateToProps)(Index);
