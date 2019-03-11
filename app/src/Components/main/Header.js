import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.head`
position: fixed;
display:flex;
flex-direction: column;
width: 100%;
font-size: 2rem;
`

function Header(){
    return(
    <StyledHeader>
        <NavLink to="">
    <i className="fas fa-arrow-circle-left"/> 
        </NavLink>
    </StyledHeader>
    )
}

export default Header;