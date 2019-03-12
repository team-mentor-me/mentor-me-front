import React, { useState } from "react";
import styled from "styled-components";
import { Intro } from "../ask/Ask";
import { BtnPrimary } from "../main/Search";

const FormStyled = styled.form`
  margin: 20% auto 0;
  width: 80%;
  color: #4c5264;

  label {
    font-size: 2rem;
    display: block;
    margin-bottom: 1rem;
    color: #5574f7;
  }

  input {
    padding: 10px 15px;
    outline: none;
    width: 100%;
    font-size: 1.6rem;
    margin-bottom: 10%;
    border-radius: 10px;
    border-color: #5574f7;
  }

  textarea {
    padding: 10px 15px;
    outline: none;
    width: 100%;
    font-size: 1.6rem;
    margin-bottom: 5%;
    border-radius: 10px;
    border-color: #5574f7;
    margin-bottom: 10%;

    &::placeholder {
      opacity: 0.6;
    }
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 10%;
    line-height: 1.4;

    strong {
      color: #5887f9;
      text-transform: uppercase;
      font-weight: 550;
      letter-spacing: 4px;
    }
  }
`;

function EditForm(props) {
  const [post, setPost] = useState(props.question.post);
  const [description, setDescription] = useState(props.question.description);

  return (
    <div>
      <Intro>Edit your question</Intro>
      <FormStyled>
        <label>Title</label>
        <input
          type="text"
          name="post"
          value={post}
          onChange={e => setPost(e.target.value)}
        />

        <label>Description</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <p>
          Your category will remain the same and specifically:{" "}
          <strong>{props.question.category}</strong>
        </p>
        <BtnPrimary width="100%" type="submit">
          <i className="fas fa-redo-alt" /> Ask again
        </BtnPrimary>
      </FormStyled>
    </div>
  );
}

export default EditForm;
