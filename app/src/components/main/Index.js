import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Top from "./Top";
import Question from "./Question";
import { fetchQuestions, logout } from "../../actions";
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

//loader style
const Load = styled.div` text-align:center; margin-top: 50%;`

function Index(props) {
  if (!props.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  useEffect(() => {
    props.fetchQuestions();
  }, []);

  if (props.fetchingQs) {
    return <Load><Loader 
    type="TailSpin"
    color="#5887F9"
    height="100"	
    width="100"
    /></Load>;
  }

  return (
    <div>
      <Top logout={props.logout} />
      {props.questions.map(question => (
        <Question question={question} key={question.post_id} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.currentUser.isLoggedIn,
    questions: state.questions.questions,
    fetchingQs: state.questions.fetchingQs
  };
};

export default connect(
  mapStateToProps,
  { fetchQuestions, logout }
)(Index);
