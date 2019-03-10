import React from "react";
import styled from "styled-components";
import { addQuestion } from "../../actions";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";

const Intro = styled.h1`
  width: 100%;
  padding: 5% 0;
  text-align: center;
  font-weight: 500;
  font-size: 3rem;
  background: #5887f9;
  color: #fff;
`;

const Ask = ({ errors, touched, handleChange }) => {
  return (
    <>
      <Intro>Ask a question</Intro>
      <p>
        Want to have a question answered by a qualified mentor? Simply fill out
        the form below
      </p>
      <Form>
        <label>Title</label>
        {touched.title && errors.title && <p>{errors.title}</p>}
        <Field name="title" type="text" />
        <label>Category</label>
        <Field component="select" name="category">
          <option value="category">Category</option>
          <option value="photography">photography</option>
          <option value="computer science">computer science</option>
          <option value="business">business</option>
          <option value="electronics">electronics</option>
          <option value="design">design</option>
        </Field>
        {touched.question && errors.question && <p>{errors.question}</p>}
        <textarea
          onChange={handleChange}
          name="question"
          cols="30"
          rows="10"
          placeholer=""
        />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

const enhancedForm = withFormik({
  mapPropsToValues() {
    return {
      title: "",
      question: "",
      category: "category"
    };
  },
  validationSchema: yup.object().shape({
    title: yup.string().required("Title is required"),
    question: yup.string().required("Question is required")
  }),
  handleSubmit({ title, question, category }, { props }) {
    const vals = {
      question: title,
      description: question,
      category,
      id: "4",
      user: {
        name: "Levi Cumbersome",
        photoUrl:
          "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg"
      }
    };
    props.addQuestion(vals).then(() => props.history.push("/"));
  }
})(Ask);

export default connect(
  null,
  { addQuestion }
)(enhancedForm);
