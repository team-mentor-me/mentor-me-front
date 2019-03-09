import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 90%;
  margin: 0 auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /*  to be removed later */
  margin-bottom: 15%;
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
  }
`;

function Top(props) {
  return (
    <Nav>
      <Search>
        <i className="fas fa-sliders-h" />
        <h3>Question Feed</h3>
        <i className="fas fa-search" />
      </Search>
    </Nav>
  );
}

export default Top;
