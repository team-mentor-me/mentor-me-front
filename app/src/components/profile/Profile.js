import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchProfile } from "../../actions";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
//styles
const StyledProfile = styled.div`
  display: flex;
  width:100%
  flex-direction: column;
  font-size: 2rem;
  background-color: white;
`;
//loader style
const Load = styled.div`
  text-align: center;
  margin-top: 50%;
`;
const Head = styled.div`
  background: red;
  background-image: url(${props => props.photo});
  object-fit: cover;
  position: relative;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  z-index: 99;
  border-bottom: solid white 30px;
`;
const Img = styled.img`
  margin-bottom: -15%;
  margin-left: -50%;
  border: solid white 7px;
  border-radius: 40px;
  max-width: 35%;
  position: static;
`;
const H1 = styled.h1`
  font-size: 4rem;
  margin-top: 17%;
  margin-bottom: 17%;
  font-family: Courgette;
  color: #000;
  text-shadow: 3px 3px #FFFFFF;
  font-weight: bold;
  -webkit-text-stroke: 1px black;
`;
const P = styled.p`
  padding: 3% 3% 0% 50%;
  margin-bottom: -3%;
  font-family: Courgette;
  font-size: 2em;
  color: #bcc5d3;
  text-shadow: 3px 3px #2b2f3b;
  font-weight: bold;
  -webkit-text-stroke: 1px black;
`;
const H3 = styled.h3`
  margin-top: 4%;
  border-top: solid black 1px;
  margin-bottom: -10%;
  padding-left: 15%;
  padding-bottom: 10px;
  border-bottom: solid black 2px;
  background: white;
`;
const Title = styled.div`
  text-align: center;
  margin-top: 20%;
  font-weight: bold;
  text-align: left;
  padding-left: 20px;
`;
const P2 = styled.p`
  text-align: center;
  padding: 20px;
  height: auto;
  text-align: left;
`;
const Tab = styled.div`
  height: auto;
`;
const About = styled.div`
  border-top: solid black 2px;
  background: -moz-linear-gradient(
    top,
    rgba(43, 47, 59, 1) 0%,
    rgba(85, 116, 247, 0.67) 33%,
    rgba(125, 185, 232, 0.02) 98%,
    rgba(125, 185, 232, 0) 100%
  );
  z-index: 1;
`;
const Edit = styled.div`
  padding: 3px 3px;
  margin: 17px 17px;
  color: red;
  font-size: 0.5em;
`;
function Profile({ profile, match, fetchProfile, currentId }) {
  useEffect(() => {
    fetchProfile(match.params.id);
  }, [match.params.id]);
  function displayEdit() {
    if (match.params.id + "" === currentId + "") {
      return <Edit><Link to={`/edit/profile/${currentId}`}>Edit Profile</Link></Edit>;
    }
  }
  // loading
  if (!profile) {
    return (
      <Load>
        <Loader type="TailSpin" color="#5887F9" height="100" width="100" />
      </Load>
    );
  }
  
  return (
    <StyledProfile>
      <Head photo={profile.photo}>
        <H1>{profile.name}</H1>
        <Img src={profile.photo} alt="user" />
        <P>{profile.role}</P>
      </Head>
      <Tab />
      <About>
        <H3>about</H3>
        <Title>Sharing my experience!</Title>
        <P2>{profile.about}</P2>
      </About>
      {displayEdit()}
    </StyledProfile>
  );
}
const mapStateToProps = state => {
  console.log(state);
  return {
    profile: state.currentUser.profileToShow,
    currentId: state.currentUser.id
  };
};
export default connect(
  mapStateToProps,
  { fetchProfile }
)(Profile);