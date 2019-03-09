import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import { login } from "../../actions";

import { connect } from "react-redux";

const Login = ({ errors, touched }) => {
  return (
    <Form>
      <h1>Sign In</h1>
      <Field name="email" type="email" />
      <Field name="password" type="password" />
      <button>Sign In</button>
    </Form>
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

export default connect(
  null,
  { login }
)(enhancedForm);
