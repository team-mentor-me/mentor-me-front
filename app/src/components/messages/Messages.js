import React from "react";
import { connect } from "react-redux";
import TopMsg from "./TopMsg";
import MessagesList from "./MessagesList";
import styled from "styled-components";
import { addMessage } from "../../actions";

// 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

const MessagesStyled = styled.div`
  height: 90vh;
`;

const FormStyled = styled.form`
  bottom: 0;
  background: black;
  color: white;
`;

const conversation = [
  {
    post_id: 1,
    post: "What's the relationship between aperture and ISO?",
    description: "extended question goes here",
    category: "Photography",
    type: "question",
    conversation_fk: 1,
    user_id: 31,
    name: "Vlad Turcan"
  },
  {
    post_id: 4,
    post: "message from mentor",
    description: "extended question goes here",
    category: "Photography",
    type: "message",
    conversation_fk: 1,
    user_id: 4,
    name: "Lucy Lee"
  }
];

function Messages(props) {
  let nameToUse;
  for (let i = 0; i < conversation.length; i++) {
    if (conversation[i].name !== props.currentUser.fullName) {
      nameToUse = conversation[i].name;
      break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addMessage({
      text: "test test",
      withWho: props.message.withWho.name
    });
  }

  console.log(props.currentUser.id);

  return (
    <MessagesStyled>
      <TopMsg history={props.history} withWho={nameToUse} />
      <MessagesList currentId={props.currentUser.id} messages={conversation} />
      <FormStyled onSubmit={handleSubmit}>
        <input type="text" />
        <button>Submit</button>
      </FormStyled>
    </MessagesStyled>
  );
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { addMessage }
)(Messages);
