import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { fetchProfile } from "../../actions";
import ProfileEditForm from "./ProfileEditForm";
import axios from "axios";

const Load = styled.div`
  text-align: center;
  margin-top: 50%;
`;
const H1 = styled.h1`
font-size: 2.2rem;
    font-family: "Gibson", sans-serif;
    color: #5887f9;
    font-weight: 550;
    text-align:center;
    margin-top:15%;`;

function ProfileEdit(props) {
  if (!props.currentUser) {
    return (
      <Load>
        <Loader type="TailSpin" color="#5887F9" height="100" width="100" />
      </Load>
    );
  }

  function handleSubmit(e, formVals) {
    e.preventDefault();
    axios
      .patch(
        `https://bw-mentor-me.herokuapp.com/api/user/${props.currentUser.id}`,
        formVals,
        {
          headers: { Authorization: localStorage.getItem("mentorMeToken") }
        }
      )
      .then(() => props.history.goBack());
  }

  return (
    <div>
      <H1>Edit Profile</H1>
      <ProfileEditForm user={props.currentUser} handleSubmit={handleSubmit} />
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { fetchProfile }
)(ProfileEdit);
