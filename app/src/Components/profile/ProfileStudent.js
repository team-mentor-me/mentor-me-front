import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Footer from "../main/Footer";

//styles
const HeaderImg = styled.img``
const About =styled.div``

function ProfileStudent({ profile }){
    return(
        <div>
            <HeaderImg>
                <h1>{profile.user.name}</h1>
                <p>Skill,Location</p>
                {/*rating star system*/}
            </HeaderImg>
            {/* + mentor me*/}
            <Img src={profile.user.photoUrl} alt="user"/>
            <h4>about</h4>{/*add questions too so they can switch between students about page and their posted questions */}
            <About>
            <h1>Trying to level up my skills as nature photographer.</h1>
            <p>blah blah</p>
            </About>
            <Footer />

        </div>
    )
} 

const mapStateToProps = state => {
    console.log(state);
    return{
        profile: state.user
    }
}

export default connect(mapStateToProps)(ProfileStudent)
