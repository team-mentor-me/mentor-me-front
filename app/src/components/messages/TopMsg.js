import React from "react";
import styled from "styled-components";

const TopMsgStyled = styled.div`
  width: 100%;
  margin-top: 8%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5%;
  border-bottom: 1px solid #e2e8ed;

  i {
    font-size: 2.4rem;
    margin-left: 5%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  justify-self: center;
  margin-right: 5%;

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  h5 {
    font-size: 1.6rem;
    font-weight: 550;
    text-align: center;
  }
`;

function TopMsg(props) {
  if (!props.withWho) {
    return <h1>Loading...</h1>;
  }

  return (
    <TopMsgStyled>
      <i onClick={() => props.history.goBack()} className="fas fa-arrow-left" />
      <UserInfo>
        {/* <img src={props.withWho.photoUrl} alt="the contact" /> */}
        <h5>{props.withWho}</h5>
      </UserInfo>
      <div />
    </TopMsgStyled>
  );
}

export default TopMsg;
