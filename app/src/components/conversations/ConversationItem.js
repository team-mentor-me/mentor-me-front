import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner';

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
const Load = styled.div`
  text-align: center;
  margin-top: 50%;
`;
//Each individual item that appears in our list. Each should link to the corresponding messages associated with it. 
function ConversationItem(props) {

  //If the conversations have not yet been received from axios request, return loading
  if (!props) {
    return (
      <Load>
        <Loader type="TailSpin" 
                color="#5887F9" 
                height="100" 
                width="100" />
      </Load>
    );
  }

  return (
    <ConvStyled>
      {/* props.conversation is an array of objects*/}
      {props.conversation.map(item => (
        <Link to={`/conversations/${item.post_id}`}>
          {" "} 
          {/* My JS prettier extension added the quotes above so I could comment this - you may want to assign a key to each child here */}
          <h3>{item.name}</h3>
          <p>
            {item.post.split(" ").length > 1 // < ---- this is all your substringing logic from before, but condensed here in mapping
              ? item.post
                  .split(" ")
                  .slice(0, 3)
                  .join(" ") + "..."
              : item.post}
          </p>
        </Link>
      ))}
    </ConvStyled>
  );
}

export default ConversationItem;
