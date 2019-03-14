import React from "react";
import { connect } from "react-redux";
import { updateQuestion } from "../../actions";
import EditFormP from "./EditFormP";
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

//loader style
const Load = styled.div` text-align:center; margin-top: 50%;`;

function EditQuestion(props) {
  console.log(props);

 
  if (!props.updateProfile) {
    return <Load><Loader 
    type="TailSpin"
    color="#5887F9"
    height="100"	
    width="100"
    /></Load>;;
  }

  return (
    <EditFormP
      about={props.currentUser.about}
      history={props.history}
    />
  );
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

export default connect(
  mapStateToProps
)(EditQuestion);
