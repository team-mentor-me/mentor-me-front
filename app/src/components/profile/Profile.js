import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchProfile } from "../../actions";
import Loader from 'react-loader-spinner';

//styles
const StyledProfile = styled.div`
  display: flex;
  width:100%
  flex-direction: column;
  font-size: 2rem;
  background-color: white;
`;
//loader style
const Load = styled.div` text-align:center; margin-top: 50%;`;
const Head = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background-image: url(${props => props.photo});
  z-index:99;
  border-bottom: solid white 30px;
`;
const Img = styled.img`
  margin-bottom: -15%;
  margin-left: -50%;
  border: solid white 7px;
  border-radius: 40px;
  max-width: 35%;
`;
const H1 = styled.h1`
  font-size: 4rem;
  margin-top: 17%;
  margin-bottom: 17%;
`;
const P = styled.p`
  padding: 3% 3% 0% 50%;
  margin-bottom: -3%;
  font-family: Courgette;
  font-size: 2em;
  color: #4C5264;
  text-shadow: 2px 2px #BCC5D3;
`;
const H3 = styled.h3`
  margin-top: 4%;
  border-top:solid black 1px;
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
  padding-left:20px;
`;
const P2 = styled.p`
  text-align: center;
  padding: 20px;
  height: auto;
  text-align: left;
`;
const Tab = styled.div`
height:auto;
`;
const About = styled.div`
  border-top: solid black 2px;
  background:  -moz-linear-gradient(
    top, rgba(43,47,59,1) 0%, 
    rgba(85,116,247,0.67) 33%,
    rgba(125,185,232,0.02) 98%, 
    rgba(125,185,232,0) 100%); `;

function Profile({ profile, match, fetchProfile }) {
  useEffect(() => {
    fetchProfile(match.params.id);
  }, []);

  if (!profile) {
    return<Load><Loader 
    type="TailSpin"
    color="#5887F9"
    height="100"	
    width="100"
    /></Load>;
  }

  return (
    <StyledProfile>
      <Head>
        <img src={profile.photo} />
        <H1>{profile.name}</H1>
       
        <Img src={profile.photo} alt="user" />
        <P>{profile.role}</P>
      </Head>
      <Tab>
       
      </Tab>
      <About>
        <H3>about</H3>
        <Title>Sharing my experience!</Title>
        <P2>{profile.about}</P2>
      </About>
    </StyledProfile>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    profile: state.currentUser.profileToShow
  };
};

export default connect(
  mapStateToProps,
  { fetchProfile }
)(Profile);
