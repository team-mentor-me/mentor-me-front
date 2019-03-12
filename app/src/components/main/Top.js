import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /*  to be removed later */
  margin-bottom: 5%;
`;

const Search = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  h3 {
    font-size: 2.2rem;
    font-family: "Gibson", sans-serif;
    color: #5887f9;
    font-weight: 550;
  }

  i {
    font-size: 2rem;
    color: #4c5264;
    opacity: 0.6;
    cursor: pointer;
  }
`;

function Top(props) {
  return (
    <Nav>
      <Search>
        <i
          onClick={() => {
            localStorage.removeItem("mentorMeToken");
            props.logout();
          }}
          className="fas fa-sliders-h"
        />
        <h3>Question Feed</h3>
        <Link to="/search">
          <i className="fas fa-search" />
        </Link>
      </Search>
    </Nav>
  );
}

export default Top;
