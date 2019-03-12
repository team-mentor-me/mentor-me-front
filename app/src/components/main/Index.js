import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Top from "./Top";
import Question from "./Question";
import { fetchQuestions, logout } from "../../actions";

function Index(props) {
  console.log(props);
  if (!props.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  useEffect(() => {
    props.fetchQuestions();
    console.log("use effect");
  }, []);

  if (props.fetchingQs) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Top logout={props.logout} />
      {props.questions.map(question => (
        <Question question={question} key={question.post_id} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoggedIn: state.currentUser.isLoggedIn,
    questions: state.questions.questions,
    fetchingQs: state.questions.fetchingQs
  };
};

export default connect(
  mapStateToProps,
  { fetchQuestions, logout }
)(Index);
