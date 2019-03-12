import React from "react";
import styled from "styled-components";
import { addQuestion } from "../../actions";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import { BtnPrimary } from "../main/Search";

const Intro = styled.h1`
  width: 100%;
  padding: 5% 0;
  text-align: center;
  font-weight: 500;
  font-size: 3rem;
  background-image: linear-gradient(to right, #60c3ff, #5574f7);
  color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const MainContent = styled.div`
  margin: 0 auto;
  width: 80%;
  color: #4c5264;

  p {
    margin-top: 10%;
    text-align: center;
    font-size: 2rem;
    line-height: 1.25;
    color: #4c5264;
  }

  form {
    margin-top: 20%;
    label {
      font-size: 2rem;
      display: block;
      margin-bottom: 1rem;
    }

    .error {
      font-size: 1.4rem;
      color: #cc0000;
      text-align: left;
      margin: 0;
      margin-bottom: 1rem;
    }

    input {
      padding: 10px 15px;
      outline: none;
      width: 100%;
      font-size: 1.8rem;
      margin-bottom: 10%;
      border-radius: 10px;
      border-color: #5574f7;
    }

    .select-input {
      width: 100%;
      font-size: 1.8rem;
      opacity: 0.7;
      background-image: linear-gradient(to right, #60c3ff, #5574f7);
      padding: 10px 15px;
      outline: none;
      color: #fff;

      i {
        text-align: right;
      }
    }

    textarea {
      padding: 10px 15px;
      outline: none;
      width: 100%;
      font-size: 1.6rem;
      margin-bottom: 5%;
      border-radius: 10px;
      border-color: #5574f7;
      margin-top: 10%;

      &::placeholder {
        opacity: 0.6;
      }
    }
  }
`;

const Ask = ({ errors, touched, handleChange }) => {
  return (
    <>
      <Intro>Ask a question</Intro>
      <MainContent>
        <p>
          Want to have a question answered by a qualified mentor? Simply fill
          out the form below
        </p>
        <Form>
          <label>Title</label>
          {touched.title && errors.title && (
            <p className="error">{errors.title}</p>
          )}
          <Field autoComplete="off" name="title" type="text" />
          <label>Category</label>
          <Field component="select" name="category" className="select-input">
            <option value="category">Select a category &#8681;</option>
            <option value="photography">photography</option>
            <option value="computer science">computer science</option>
            <option value="business">business</option>
            <option value="electronics">electronics</option>
            <option value="design">design</option>
          </Field>
          {touched.question && errors.question && (
            <p className="error">{errors.question}</p>
          )}
          <textarea
            onChange={handleChange}
            name="question"
            cols="30"
            rows="10"
            placeholder="What question do you want to ask the mentors?"
          />
          <BtnPrimary width="100%" type="submit">
            Submit
          </BtnPrimary>
        </Form>
      </MainContent>
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
    props.addQuestion(vals, props.user_id).then(() => props.history.push("/"));
  }
})(Ask);

const mapStateToProps = state => ({
  user_id: state.currentUser.id
});

export default connect(
  mapStateToProps,
  { addQuestion }
)(enhancedForm);
