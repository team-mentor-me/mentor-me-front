import React from "react";
import Modal from "../../utils/Modal";
import { connect } from "react-redux";
import { deleteQuestion } from "../../actions";

function Delete(props) {
  function onDismiss(e) {
    e.stopPropagation();
    props.history.goBack();
  }

  function onDelete() {
    props
      .deleteQuestion(props.match.params.id)
      .then(() => props.history.push("/"));
  }

  return (
    <div>
      <Modal title={"test"} onDelete={onDelete} onDismiss={onDismiss} />
    </div>
  );
}

// const mapStateToProps =

export default connect(
  null,
  { deleteQuestion }
)(Delete);
