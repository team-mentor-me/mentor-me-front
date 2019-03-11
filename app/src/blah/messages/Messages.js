import React from "react";
import { connect } from "react-redux";
import TopMsg from "./TopMsg";
import MessagesList from "./MessagesList";
import styled from "styled-components";
import { addMessage } from "../../actions";

const MessagesStyled = styled.div`
  height: 90vh;
`;

const InputStyled = styled.input`
  bottom: 0;
  background: black;
  color: white;
`;

function Messages(props) {
  console.log(props.message);
  function handleSubmit(e) {
    e.preventDefault();
    props.addMessage({
      text: "test test",
      withWho: props.message.withWho.name
    });
  }

  return (
    <MessagesStyled>
      <TopMsg history={props.history} withWho={props.message.withWho} />
      <MessagesList messages={props.message.listOfMessages} />
      <form onSubmit={handleSubmit}>
        <InputStyled type="text" />
        <button>Submit</button>
      </form>
    </MessagesStyled>
  );
}

const mapStateToProps = (state, ownProps) => ({
  message: state.currentUser.messages.find(
    msg => msg.id === ownProps.match.params.id
  )
});

export default connect(
  mapStateToProps,
  { addMessage }
)(Messages);
