import React from "react";
import Modal from "../../utils/Modal";

function Delete(props) {
  function onDismiss(e) {
    e.stopPropagation();
    props.history.goBack();
  }

  function onDelete() {
    // props.deleteNote(props.match.params.id).then(() => props.history.push("/"));
  }

  return (
    <div>
      <Modal title={"test"} onDelete={onDelete} onDismiss={onDismiss} />
    </div>
  );
}

export default Delete;
