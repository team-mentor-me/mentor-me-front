import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 20px 10px;
  display: flex;
  justify-content: space-around;
  color: #bcc5d3;
  background: #fff;
  width: 100%;

  font-size: 2rem;

  a {
    color: inherit;

    .selected {
      color: #5887f9;
    }
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <NavLink exact to="/" activeStyle={{ color: "#5887F9" }}>
        <i className="fas fa-home" />
      </NavLink>
      <NavLink to="/profile/Profile">
        <i className="far fa-user" />
      </NavLink>
      <NavLink to="/messages" activeStyle={{ color: "#5887F9" }}>
        <i className="fas fa-user-friends" />
      </NavLink>
      <NavLink to="/ask" activeStyle={{ color: "#5887F9" }}>
        <i className="far fa-comment" />
      </NavLink>
      <NavLink to="/answers" activeStyle={{ color: "#5887F9" }}>
        <i className="fas fa-key" />
      </NavLink>
    </FooterStyled>
  );
}

export default Footer;
