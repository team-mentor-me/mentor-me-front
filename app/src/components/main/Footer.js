import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterStyled = styled.footer`
  z-index: 100;
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 20px 10px;
  display: flex;
  justify-content: space-around;
  color: #bcc5d3;
  background: #fff;
  width: 100%;
  z-index: 9001;
  font-size: 2rem;

  a {
    color: inherit;

    cursor: pointer;
  }
`;

function Footer(props) { console.log(props);
  return (
    <FooterStyled>
      <NavLink exact to="/" activeStyle={{ color: "#5887F9" }}>
        <i className="fas fa-home" />
      </NavLink>
      <NavLink
        activeStyle={{ color: "#5887F9" }}
        to={`/profile/${props.user.id}`}
      >
        <i className="far fa-user" />
      </NavLink>
      <NavLink to="/ask" activeStyle={{ color: "#5887F9" }}>
        <i className="fas fa-plus" />
      </NavLink>
      <NavLink exact to="/conversations" activeStyle={{ color: "#5887F9" }}>
        <i className="fas fa-user-friends" />
      </NavLink>
    </FooterStyled>
  );
}

export default Footer;
