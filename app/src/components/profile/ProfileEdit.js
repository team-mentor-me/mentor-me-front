import React, { useEffect } from "react";
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
      <h1>Edit Profile</h1>
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
