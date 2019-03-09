import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Question from "./Question";
import SearchTop from "./SearchTop";

const MainContent = styled.div`
  margin-top: 8%;
  .question {
    text-align: center;
    font-size: 1.6rem;
    color: #4c5264;
    margin-bottom: 3%;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 90%;
      margin: 0 auto;
      border: none;
      outline: none;
      padding: 15px;
      font-size: 2rem;
      color: #5887f9;
      font-weight: 550;
      border-bottom: 1px solid #4c5264;
      background: transparent;

      &::placeholder {
        text-align: center;
        color: inherit;
      }
    }

    button {
      width: 90%;
      font-size: 1.4rem;
      background-image: linear-gradient(to right, #60c3ff, #5574f7);
      color: white;
      padding: 15px;
      border-radius: 10px;
      margin-top: 5%;
      outline: none;
      word-spacing: 0.7rem;
      margin-bottom: 10%;

      i {
        font-size: 1.4rem;
      }
    }
  }
`;

function Search(props) {
  const [search, setSearch] = useState("");
  const [qs, setQs] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newRes = props.questions.filter(q => q.category.includes(search));
    console.log(newRes);
    setQs(newRes);
  }

  return (
    <>
      <SearchTop />
      <MainContent>
        <p className="question">What would you like to help with?</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Insert a value"
            value={search}
            onChange={e => setSearch(e.target.value)}
            autoComplete="off"
          />
          <button>
            <i className="fas fa-search" /> Find
          </button>
        </form>
        {qs.map(q => (
          <Question question={q} />
        ))}
      </MainContent>
    </>
  );
}

const mapStateToProps = state => ({
  questions: state.questions
});

export default connect(mapStateToProps)(Search);
