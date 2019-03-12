import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import { login } from "../../actions";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";

import { connect } from "react-redux";

export const LoginStyled = styled.div`
  height: auto;
  width: 100vw;
  background: linear-gradient(to bottom, rgba(0,96,195,1) 0%,rgba(85,116,247,1) 100%);
  font-family: canada-type-gibson, sans-serif;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  h1 {
    margin-top: 24%;
    margin-bottom: 18%;
    font-size: 4rem;
    font-weight: 550;
    color: #fff;
  }

  form {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 20%;

    input {
      padding: 15px;
      display: block;
      width: 90%;
      font-size: 2rem;
      background: transparent;
      border: none;
      outline: none;
      margin-bottom: 5%;
      color: #fff;

      &::placeholder {
        text-align: ${props => (props.register ? "left" : "center")};
        color: #fff;
        opacity: 0.3;
        font-size: 1.6rem;
      }
    }

    button {
      margin-top: 3%;
      width: 100%;
      display: block;
      font-size: 1.6rem;
      color: black;
      background: #fff;
      padding: 15px;
      border-radius: 10px;
      color: #5887f9;
      letter-spacing: 3px;
      font-weight: 600;
      outline: none;
    }
  }

  a {
    margin-bottom: 20%;
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
  }

  p {
    font-size: 1.4rem;
    color: #cc0000;
    text-align: center;
  }
`;

const Login = ({ errors, touched, isLoggedIn }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <LoginStyled>
      <h1>Sign In</h1>
      <Form>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field name="email" type="email" placeholder="email" />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field name="password" type="password" placeholder="password" />
        <button>Sign In</button>
      </Form>
      <Link to="/signup">Register</Link>
    </LoginStyled>
  );
};

const enhancedForm = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    email: yup.string().required("Email might be wrong"),
    password: yup.string().required("Password might be incorrect")
  }),
  handleSubmit(formVals, { props }) {
    props.login(formVals).then(() => props.history.push("/"));
  }
})(Login);

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  { login }
)(enhancedForm);
