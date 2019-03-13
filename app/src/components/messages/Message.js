import React from "react";
import styled from "styled-components";

const MessageStyled = styled.div`
  padding: 10px;
  background: ${props => (props.mine ? "#FFFFFF" : "#5887F9")};
  color: ${props => (props.mine ? "#4C5264" : "#FFFFFF")};
  width: 50%;
  margin: 3% 5%;
  align-self: ${props => (props.mine ? "flex-end" : "flex-start")};
  font-size: 1.4rem;
  border-radius: 10px;
  border: ${props => (props.mine ? "1px solid #E2E8ED" : null)};
`;

function Message(props) {
  console.log(props.message);
  console.log(props.userId);
  return (
    <MessageStyled mine={props.currentId === props.message.user_id}>
      {props.message.post}
    </MessageStyled>
  );
}

export default Message;
