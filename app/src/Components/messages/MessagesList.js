import React from "react";
import styled from "styled-components";
import Message from "./Message";

const MessagesListStyled = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
`;

function MessagesList(props) {
  return (
    <MessagesListStyled>
      {props.messages.map(msg => (
        <Message key={msg.id} message={msg} />
      ))}
    </MessagesListStyled>
  );
}

export default MessagesList;
