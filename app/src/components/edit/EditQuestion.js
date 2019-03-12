import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchQuestion, fetchQuestions } from "../../actions";
import EditForm from "./EditForm";

function EditQuestion(props) {
  console.log(props);

  useEffect(() => {
    props.fetchQuestions();
  }, []);

  if (!props.testQ) {
    return <div>Loading...</div>;
  }

  return <EditForm question={props.testQ} />;
}

const mapStateToProps = (state, ownProps) => ({
  singleQuestion: state.questions.singleQuestion,
  testQ: state.questions.questions[ownProps.match.params.id - 1]
});

export default connect(
  mapStateToProps,
  { fetchQuestion, fetchQuestions }
)(EditQuestion);
