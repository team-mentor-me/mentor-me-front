import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Top from "./Top";
import Question from "./Question";
import { fetchQuestions } from "../../actions";

function Index(props) {
  if (!props.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  useEffect(() => {
    props.fetchQuestions();
  }, []);

  return (
    <div>
      <Top />
      {props.questions.map(question => (
        <Question question={question} key={question.id} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoggedIn: state.questions.isLoggedIn,
    questions: state.questions.questions
  };
};

export default connect(
  mapStateToProps,
  { fetchQuestions }
)(Index);
