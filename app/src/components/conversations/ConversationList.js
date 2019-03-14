import React, { useEffect, useState } from "react";
import ConversationItem from "./ConversationItem";
import { connect } from "react-redux";
import { Intro } from "../ask/Ask";
import { fetchConversations, fetchConversationHelper } from "../../actions";

// const conversations = [
//   [
//     {
//       post_id: 1,
//       post: "What's the relationship between aperture and ISO?",
//       description: "extended question goes here",
//       category: "Photography",
//       type: "question",
//       conversation_fk: 1,
//       user_id: 1,
//       name: "Angello Lopez"
//     },
//     {
//       post_id: 4,
//       post: "message from mentor",
//       description: "extended question goes here",
//       category: "Photography",
//       type: "message",
//       conversation_fk: 1,
//       user_id: 4,
//       name: "Lucy Lee"
//     }
//   ],
//   [
//     {
//       post_id: 1,
//       post: "What's the relationship between aperture and ISO?",
//       description: "extended question goes here",
//       category: "Photography",
//       type: "question",
//       conversation_fk: 2,
//       user_id: 1,
//       name: "Angello Lopez"
//     },
//     {
//       post_id: 4,
//       post: "how is it going blah blah blah",
//       description: "extended question goes here",
//       category: "Development",
//       type: "message",
//       conversation_fk: 2,
//       user_id: 9,
//       name: "Michael Joe"
//     }
//   ]
// ];

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
