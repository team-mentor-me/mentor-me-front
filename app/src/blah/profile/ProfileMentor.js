import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";


//styles
const StyledProfile = styled.div`
display: flex;
flex-direction: column;
font-size: 2rem;
background-color: white;
height: auto;
`;
const Head = styled.div`
width: 100%;
background-image: ;
margin: 0 auto;
text-align: center;
background: linear-gradient(45deg, rgba(85,116,247,1) 0%,rgba(96,195,255,1) 100%);
`;
const Img = styled.img`
margin-bottom: -7%;
margin-left: -50%;
border: solid white 9px;
max-width: 240px;
max-length: 240px;
border-radius:7px;
`;
const H1 = styled.h1`
font-size: 4rem;
margin-top: 17%;
`;
const P = styled.p`
padding-bottom: 10%;
`;
const Title = styled.div`
text-align:center;
margin-top: 14%;
font-weight: bold
`;
const H3 = styled.h3`
margin-top: 12%;
margin-bottom: -10%;
padding-left: 15%;
padding-bottom: 10px;
border-bottom: solid black 2px;
;`
const P2 = styled.p`
text-align:center;
padding: 20px;
height: auto;`


function ProfileMentor({ profile }) {
  return (
    <StyledProfile>
      <Head>
        <H1>{profile.fullName}</H1>
        <P>Skill,Location</P>
        <Img src={profile.photoUrl} alt="user" />
      </Head>
      <H3>about</H3>{/*add questions too so they can switch between mentors about page and their posted questions */}
      <Title>Sharing my experience with aspiring Photographers</Title>
      <P2>blah blah</P2>
    </StyledProfile>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    profile: state.currentUser
  };
};

export default connect(mapStateToProps)(ProfileMentor);
