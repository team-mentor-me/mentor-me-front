import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const QuestionStyled = styled.div`
  a {
    font-family: sans-serif;
    text-decoration: none;
    color: black;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }
`;

const Content = styled.div`
  position: absolute;
  z-index: 5;
  margin-top: 20%;

  h3 {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    margin-bottom: 5%;
  }

  h5 {
    font-size: 1.6rem;
    color: #ffffff;
    opacity: 0.6;
    text-align: center;
    margin-bottom: 10%;
  }

  p {
    font-size: 1.4rem;
    color: #ffffff;
    font-family: "Helvetica Neu", sans-serif;
    text-align: center;
  }
`;

function Question({ question }) {
  return (
    
    <QuestionStyled>

      <Link to={`/question/${question.post_id}`}>
        <img src={question.photo} alt="user" />
        <Content>
          <h3>{question.name}</h3>
          <h5>{question.category}</h5>
          <p>{question.post}</p>
        </Content>
      </Link>
    </QuestionStyled>
  );
}

export default Question;
