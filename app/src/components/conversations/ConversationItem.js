import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ConvStyled = styled.div`
  a {
    color: black;
    text-decoration: none;
    display: flex;
    padding: 25px;
    cursor: pointer;

    justify-content: space-between;
    align-items: baseline;
    border-bottom: 5px solid #5887f9;
    h3 {
      font-weight: 550;
      font-size: 1.8rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

function ConversationItem(props) {
  let nameToUse;
  let textToUse;
  for (let i = 0; i < props.conversation.length; i++) {
    if (props.conversation[i].name !== props.current.fullName) {
      nameToUse = props.conversation[i].name;
      break;
    }
  }

  console.log(props);

  if (
    props.conversation[props.conversation.length - 1].post.split(" ").length > 4
  ) {
    textToUse =
      props.conversation[props.conversation.length - 1].post
        .split(" ")
        .slice(0, 3)
        .join(" ") + "...";
  } else {
    textToUse = props.conversation[props.conversation.length - 1].post;
  }

  console.log(props.conversation);
  return (
    <ConvStyled>
      <Link to={`/conversations/${props.conversation[0].conversation_fk}`}>
        <h3>{nameToUse}</h3>
        <p>{textToUse}</p>
      </Link>
    </ConvStyled>
  );
}

export default ConversationItem;
