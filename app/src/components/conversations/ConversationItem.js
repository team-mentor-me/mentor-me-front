import React from "react";

function ConversationItem(props) {
  const conv = {
    ids: [props.conversation.partner_1_id, props.conversation.partner_2_id],
    names: [
      props.conversation.partner_1_name,
      props.conversation.partner_2_name
    ],
    photo: [
      props.conversation.partner_1_photo,
      props.conversation.partner_2_photo
    ],
    msg: props.conversation.messages[props.conversation.messages.length - 1]
  };
  console.log(conv.ids);
  const index = conv.ids.findIndex(el => el === props.current);
  return (
    <div>
      <h3>{conv.names[index]}</h3>
      <p>{conv.msg.text}</p>
    </div>
  );
}

export default ConversationItem;
