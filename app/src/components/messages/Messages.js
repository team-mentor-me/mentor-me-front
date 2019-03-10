import React from "react";
import { connect } from "react-redux";
import TopMsg from "./TopMsg";
import MessagesList from "./MessagesList";

function Messages(props) {
  console.log(props.message);
  return (
    <div>
      <TopMsg history={props.history} withWho={props.message.withWho} />
      <MessagesList messages={props.message.listOfMessages} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  message: state.currentUser.messages.find(
    msg => msg.id === ownProps.match.params.id
  )
});

export default connect(mapStateToProps)(Messages);
