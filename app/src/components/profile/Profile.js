import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchProfile } from "../../actions";
import Loader from 'react-loader-spinner';

//styles
const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  background-color: white;
  height: auto;
`;
//loader style
const Load = styled.div` text-align:center; margin-top: 50%;`;
const Head = styled.div`
  width: 100%;
  background-image: ;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(
    45deg,
    rgba(85, 116, 247, 1) 0%,
    rgba(96, 195, 255, 1) 100%
  );
`;
const Img = styled.img`
  margin-bottom: -7%;
  margin-left: -50%;
  border: solid white 7px;
  border-radius: 40px;
  max-width: 35%;
`;
const H1 = styled.h1`
  font-size: 4rem;
  margin-top: 17%;
`;
const P = styled.p`
  padding-bottom: 10%;
  padding-top: 3%;
  color: lightgrey;
`;
const Title = styled.div`
  text-align: center;
  margin-top: 20%;
  font-weight: bold;
`;
const H3 = styled.h3`
  margin-top: 12%;
  margin-bottom: -10%;
  padding-left: 15%;
  padding-bottom: 10px;
  border-bottom: solid black 2px;
`;
const P2 = styled.p`
  text-align: center;
  padding: 20px;
  height: auto;
`;

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
        <H1>{profile.name}</H1>
        <P>{profile.role}</P>
        <Img src={profile.photo} alt="user" />
      </Head>
      <div>
        <H3>about</H3>
      </div>
      <div>
        <Title>Sharing my experience with aspiring Photographers</Title>
        <P2>blah blah</P2>
      </div>
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
