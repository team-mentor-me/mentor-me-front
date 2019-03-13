import React from "react";
import styled from "styled-components";

const ConvStyled = styled.div`
  display: flex;
  padding: 25px;

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
  console.log(
    (textToUse = props.conversation[props.conversation.length - 1].post.split(
      " "
    ).length)
  );

  if (
    props.conversation[props.conversation.length - 1].post.split(" ").length > 4
  ) {
    textToUse =
      props.conversation[props.conversation.length - 1].post
        .split(" ")
        .slice(0, 3)
        .join(" ") + "...";
    console.log(textToUse);
  } else {
    textToUse = props.conversation[props.conversation.length - 1].post;
  }

  console.log(props);
  return (
    <ConvStyled>
      <h3>{nameToUse}</h3>
      <p>{textToUse}</p>
    </ConvStyled>
  );
}

export default ConversationItem;
