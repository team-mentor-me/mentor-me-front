import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";


//styles
const StyledProfile = styled.div`
display: flex;
flex-direction: column;
font-size: 2rem;
background-color: red;
`;
const Head = styled.div`
width: 100%;
background-image: ;
margin: 0 auto;
text-align: center;
background-color: #60C3FF;
`;
const Img = styled.img`
margin-bottom: -10%;
margin-left: -50%;
border: solid white 9px;
max-width: 300px;
max-length: 300px;
border-radius:7px;
`;
const H1 = styled.h1`
font-size: 4rem;
margin-top: 17%;
`;
const P = styled.p`
padding-bottom: 10%;
`;
const About = styled.div`
margin-top: 10%;
`;
const H3 = styled.h3`
padding-left: 15%;`

function ProfileMentor({ profile }) {
  return (
    <StyledProfile>
      <Head>
      
      <H1>{profile.fullName}</H1>
      <P>Skill,Location</P>
      <Img src={profile.photoUrl} alt="user" />
      </Head>
      <About>
      <H3>about</H3>{/*add questions too so they can switch between mentors about page and their posted questions */}
      <h1>Sharing my experience with aspiring Photographers</h1>
      <p>blah blah</p>
      </About>
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
