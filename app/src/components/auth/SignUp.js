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

  return (
    <LoginStyled register>
      <h1>Register</h1>
      <Form>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field name="username" type="text" placeholder="Full Name" />
        {touched.country && errors.country && <p>{errors.country}</p>}
        <Field name="country" type="text" placeholder="Country" />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field name="email" type="email" placeholder="Email" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field name="password" type="password" placeholder="Password" />
        <button>
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
      country: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    username: yup.string().required("This field is required"),
    country: yup.string().required("Country is required")
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
