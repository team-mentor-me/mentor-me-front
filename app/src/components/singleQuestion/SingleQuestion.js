import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { BtnPrimary } from "../main/Search";
import { Link } from "react-router-dom";

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
  border: 3px solid #fff;
  border-radius: 8px;
`;

const QuestionDiv = styled.div`
  margin-top: 20%;
  background: #fafafa;
  height: 67vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  div {
    h3 {
      width: 87%;
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
    }
  }

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
`;

function SingleQuestion({ question, currentUser }) {
  function displayButtons() {
    if (currentUser.id + "" === question.user_id + "") {
      return (
        <>
          <Link to={`/delete/${question.post_id}`}>Delete</Link>
          <Link to={`/edit/${question.post_id}`}>Edit</Link>
        </>
      );
    }
  }

  return (
    <div>
      <Link style={{ textDecoration: "none" }} to='/'>
        <UserDetails>
          <h1>{question.name}</h1>
        </UserDetails>
        <Img src={question.photo} alt="user" />
      </Link>
      <div>
        <QuestionDiv>
          <div>
            <h3>Question</h3>
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

const mapStateToProps = (state, ownProps) => {
  console.log(
    state.questions.questions.find(
      q => q.post_id + "" === ownProps.match.params.id
    )
  );
  return {
    question: state.questions.questions.find(
      q => q.post_id + "" === ownProps.match.params.id
    ),
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(SingleQuestion);
