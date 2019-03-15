import React, { useEffect, useState } from "react";
import ConversationItem from "./ConversationItem";
import { connect } from "react-redux";
import { Intro } from "../ask/Ask";
import { fetchConversations, fetchConversationHelper } from "../../actions";
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

//loader style
const Load = styled.div`
  text-align: center;
  margin-top: 50%;
`;
function ConversationList(props) {
  const [conversations, setConvs] = useState([]);
  useEffect(() => {
    fetchData().then(res => {
      setTimeout(() => {
        setConvs(res);
      }, 1000);
    });
  }, []);

  const fetchData = async () => {
    const res = await fetchConversations(1);
    console.log(res.length);
    return res;
  };

  console.log(conversations);

  //If the conversations have not yet been received from axios request, return loading
  if (conversations.length === 0) {
    return (
      <Load>
        <Loader type="TailSpin" color="#5887F9" height="100" width="100" />
      </Load>
    );
  }

  return (
    <div>
      <Intro>Conversations</Intro>
      {conversations.map((conv, i) => (
        <ConversationItem
          current={props.currentUser}
          key={i}
          conversation={conv}
        />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(ConversationList);
