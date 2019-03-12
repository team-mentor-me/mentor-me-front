import React, { useState } from "react";
import styled from "styled-components";

function EditForm(props) {
  const [post, setPost] = useState(props.question.post);
  const [description, setDescription] = useState(props.question.description);

  return (
    <div>
      <form>
        <input
          type="text"
          name="post"
          value={post}
          onChange={e => setPost(e.target.value)}
        />
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </form>
    </div>
  );
}

export default EditForm;
