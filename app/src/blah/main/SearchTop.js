import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8% 5% 5%;
  border-bottom: 1px solid #e2e8ed;

  h2 {
    font-size: 2rem;
    font-weight: 550;
    color: #5887f9;
  }

  i {
    color: #4c5264;
    font-size: 2rem;
    cursor: pointer;
  }
`;

function SearchTop() {
  return (
    <Nav>
      <div />
      <h2>Search</h2>
      <Link to="/">
        <i className="fas fa-times" />
      </Link>
    </Nav>
  );
}

export default SearchTop;
