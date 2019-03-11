import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Footer from "../main/Footer";

//styles
const HeaderImg = styled.img``;
const About = styled.div``;

function ProfileMentor({ profile }) {
  return (
    <div>
      <h1>{profile.fullName}</h1>
      <p>Skill,Location</p>
      <img src={profile.photoUrl} alt="user" />
      <h4>about</h4>
      {/*add questions too so they can switch between mentors about page and their posted questions */}
      <About>
        <h1>Sharing my experience with aspiring Photographers</h1>
        <p>blah blah</p>
      </About>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    profile: state.currentUser
  };
};

export default connect(mapStateToProps)(ProfileMentor);
