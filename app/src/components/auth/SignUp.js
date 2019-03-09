import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import { signup } from "../../actions";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

const SignUp = ({ errors, touched, isLoggedIn }) => {
  console.log("mounted");
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Sign Up</h1>
      <Form>
        <Field name="username" type="text" />
        <Field name="country" type="text" />
        <Field name="email" type="email" />
        <Field name="password" type="password" />
        <button>Sign Up</button>
      </Form>
    </>
  );
};

const enhancedForm = withFormik({
  mapPropsToValues(props) {
    return {
      email: props.email,
      password: props.password,
      country: props.country,
      password: props.password
    };
  },
  validationSchema: yup.object().shape({
    email: yup.string().required("Email might be wrong"),
    password: yup.string().required("Password might be incorrect"),
    username: yup.string().required("This field is required")
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
