import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchQuestion, fetchQuestions } from "../../actions";
import EditForm from "./EditForm";
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

//loader style
const Load = styled.div` text-align:center; margin-top: 50%;`;

function EditQuestion(props) {
  console.log(props);

  useEffect(() => {
    props.fetchQuestions();
  }, []);

  if (!props.testQ) {
    return <Load><Loader 
    type="TailSpin"
    color="#5887F9"
    height="100"	
    width="100"
    /></Load>;;
  }

  return <EditForm question={props.testQ} />;
}

const mapStateToProps = (state, ownProps) => ({
  singleQuestion: state.questions.singleQuestion,
  testQ: state.questions.questions[ownProps.match.params.id - 1]
});

export default connect(
  mapStateToProps,
  { fetchQuestion, fetchQuestions }
)(EditQuestion);
