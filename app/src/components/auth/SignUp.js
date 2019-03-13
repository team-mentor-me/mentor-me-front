import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import { signup } from "../../actions";
import { Redirect } from "react-router-dom";
import { LoginStyled } from "./Login";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const SignUp = ({ errors, touched, isLoggedIn }) => {
  console.log("mounted");
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  console.log(errors);

  return (
    <LoginStyled register>
      <h1>Register</h1>
      <Form>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field name="username" type="text" placeholder="Username" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field name="password" type="password" placeholder="Password" />
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field name="name" type="text" placeholder="Full Name" />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field name="email" type="email" placeholder="Email" />

        <button type="submit">
          <i className="far fa-edit" /> Register
        </button>
      </Form>
      <Link to="/login">Login</Link>
    </LoginStyled>
  );
};

const enhancedForm = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      username: "",
      name: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    username: yup.string().required("This field is required"),
    name: yup.string().required("Country is required")
  }),
  handleSubmit(formVals, { props }) {
    props.signup(formVals).then(() => props.history.push("/"));
  }
})(SignUp);

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  { signup }
)(enhancedForm);
