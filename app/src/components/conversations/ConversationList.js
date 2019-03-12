import React from "react";
import ConversationItem from "./ConversationItem";
import { connect } from "react-redux";

const conversations = [
  {
    partner_1_id: 3,
    partner_2_id: 21,
    partner_1_photo: "", // not sure if you can get that one
    partner_2_photo: "", // not sure if you can get that one
    partner_1_name: "Shelly", // idk
    partner_2_name: "q", // idk
    conv_id: 456,
    messages: [
      {
        text: "hi whats up",
        user_id: 3
      },
      {
        text: "all good",
        user_id: 21
      },
      {
        text: "I am glad",
        user_id: 3
      },
      {
        text: "can we start working?",
        user_id: 3
      }
    ]
  },
  {
    partner_1_id: 7,
    partner_2_id: 21,
    partner_1_photo: "", // not sure if you can get that one
    partner_2_photo: "", // not sure if you can get that one
    partner_1_name: "Daniel", // idk
    partner_2_name: "q", // idk
    conv_id: 457,
    messages: [
      {
        text: "hi whats up",
        user_id: 21
      },
      {
        text: "all good",
        user_id: 7
      },
      {
        text: "I am glad",
        user_id: 21
      },
      {
        text: "something else?",
        user_id: 21
      }
    ]
  }
];

function ConversationList(props) {
  return (
    <div>
      {conversations.map(conv => (
        <ConversationItem
          current={props.currentUser.id}
          key={conv.conv_id}
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
