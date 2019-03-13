import React from "react";
import { connect } from "react-redux";
import { updateQuestion } from "../../actions";
import EditForm from "./EditForm";

function EditQuestion(props) {
  if (!props.singleQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <EditForm
      question={props.singleQuestion}
      updateQuestion={props.updateQuestion}
      history={props.history}
    />
  );
}

const mapStateToProps = state => ({
  singleQuestion: state.questions.singleQuestion
});

export default connect(
  mapStateToProps,
  { updateQuestion }
)(EditQuestion);
