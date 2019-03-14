import React, { useEffect, useState } from "react";
import ConversationItem from "./ConversationItem";
import { connect } from "react-redux";
import { Intro } from "../ask/Ask";
import { fetchConversations, fetchConversationHelper } from "../../actions";

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
    return <h1>Loading...</h1>;
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
