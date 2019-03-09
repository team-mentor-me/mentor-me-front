import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import { login } from "../../actions";
import { Redirect, Link } from "react-router-dom";

import { connect } from "react-redux";

const Login = ({ errors, touched, isLoggedIn }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Sign In</h1>
      <Form>
        <Field name="email" type="email" />
        <Field name="password" type="password" />
        <button>Sign In</button>
      </Form>
      <Link to="/signup">Sign Up</Link>
    </>
  );
};

const enhancedForm = withFormik({
  mapPropsToValues(props) {
    return {
      email: props.email,
      password: props.password
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
