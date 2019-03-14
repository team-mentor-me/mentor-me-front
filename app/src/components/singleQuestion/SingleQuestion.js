import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { BtnPrimary } from "../main/Search";
import { Link } from "react-router-dom";
import {fetchQuestion} from '../../actions';
import Loader from 'react-loader-spinner';

//loader style
const Load = styled.div` text-align:center; margin-top: 50%;`

const UserDetails = styled.div`
  position: relative;
  h1 {
    padding: 12% 0 15%;
    font-size: 2rem;
    background-image: linear-gradient(to left, #60c3ff, #5574f7);
    width: 100%;
    text-align: center;
    font-weight: 550;
    color: #fff;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 30%;
  top: 12%;
  left: 35%;
  border: solid white 7px;
  border-radius: 40px;
`;

const Edit = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-end;
  padding: 3px 3px;
  padding-left: 200px;
  margin: 17px 17px;
  color: red;
  font-size: 2em;
`;

const QuestionDiv = styled.div`
  margin-top: 20%;
  background: #fafafa;
  height: 67vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* align-items: center; */
  justify-content: space-between;
  div {
    h3 {
      width: 100%;
      margin: 0 auto;
      font-size: 2rem;
      font-weight: 550;
      letter-spacing: 4px;
      color: #5574f7;
      padding-top: 5%;
    }

    p {
      width: 90%;
      margin: 0 auto;
      margin-top: 7%;
      font-size: 1.6rem;
      line-height: 1.45;
      height: auto;
    }
  }

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
`;

const RenderStyled = styled.div`
  display: flex;
  width: 90%;
  align-items: baseline;
  justify-content: space-between;
  margin: 0 auto;

  a {
    text-decoration: none;
    font-size: 1.8rem;
    margin: 0 1rem;
    color: DarkMagenta;
  }
`;

function SingleQuestion({ question, currentUser, fetchQuestion, match }) {
  useEffect(() => {
    fetchQuestion(match.params.id);
  }, []);

  if (!question) {
    return <Load><Loader 
    type="TailSpin"
    color="#5887F9"
    height="100"	
    width="100"
    /></Load>;
  }

  console.log(question);

  function displayButtons() {
    console.log("hihi");
    if (currentUser.id + "" === question.user_id + "") {
      console.log("hi");
      console.log(question)
      return (
        <>
          <Edit>
            <Link
              style={{ textDecoration: "none" }}
              to={`/edit/${question.post_id}`}
            >
              EDIT
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/delete/${question.post_id}`}
            >
              DELETE
            </Link>
          </Edit>
        </>
      );
    }
    return null;
  }

  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        to={`/profile/${question.user_id}`}
      >
        <UserDetails>
          <h1>{question.name}</h1>
          <h3>{question.role}</h3>
        </UserDetails>
        <Img src={question.photo} alt="user" />
      </Link>
      <div>
        <QuestionDiv>

          <div>
            <RenderStyled>
              <h3>{question.post}</h3>
             
            </RenderStyled>
            {displayButtons()}
            <p>{question.description}</p>
         
          </div>

          <Link style={{ textDecoration: "none" }} to={`/conversation/22`}>
            <BtnPrimary width="87%">
              <i className="fas fa-user-plus" /> Respond
            </BtnPrimary>
          </Link>
        </QuestionDiv>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    question: state.questions.singleQuestion,
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  {fetchQuestion}
)(SingleQuestion);
