import React, { useEffect, useState } from "react";
import ConversationItem from "./ConversationItem";
import { connect } from "react-redux";
import { Intro } from "../ask/Ask";
import { fetchConversations, fetchConversationHelper } from "../../actions";

 function ConversationList(props) {
  const [conversations, setConvs] = useState([]);

//This is effectively componentWillMount + componentDidMount (I think) and we are using it to update state with setConvs
  useEffect(() => {
  const data = [];
    fetchConversations(1) //< --- honestly not entirely sure why the parameter of (1) needed to happen. Didn't look into it, but I trust the logic. Seems to work ¯\_(ツ)_/¯
      .then(res => {
        res.forEach(conv_id => {
          fetchConversationHelper(conv_id).then(res => { // < --- calling the helper to get stuffs
            data.push(res);
            const newState = conversations.concat(data); // < just concat-ing res into conversations changed the array into an object or did some other weird stuff to it, didn't want that so I made an array "data" to concat instead.
            setConvs(newState); // < --- here we set state. this is basically this.setState({ conversations: [...newState]}) since I continuously concat data onto the end of the existing array, it wont be overwritten with state change
          });
        });
      })
  }, []); 

  //If the conversations have not yet been received from axios request, return loading
  if (conversations.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Intro>Conversations</Intro>
      {conversations.map((conv, i) => ( // <--- map through conversation items . This actually *might* be unnecessary, since I map on the conversationItiem.js
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

