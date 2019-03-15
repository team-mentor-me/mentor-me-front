import React, { useState } from "react";
import styled from 'styled-components';

const Input = styled.input`
display:flex;
flex-direction: column;
margin: 5% auto;`;
const Area = styled.textarea`
display:flex;
flex-direction: column;
margin: 5% auto;`;
const Button = styled.button`
display:flex;
flex-direction: column;
margin: 5% auto;`;

function ProfileEditForm(props) {
  console.log(props);
  const [values, setValues] = useState({
    name: props.user.fullName,
    role: props.user.role,
    photo: props.user.photoUrl,
    about: props.user.about
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={e => props.handleSubmit(e, values)}>
      <Input
        onChange={handleChange}
        value={values.name}
        name="name"
        type="text"
      />
      <Input
        onChange={handleChange}
        value={values.role}
        name="role"
        type="text"
      />
      <Input
        onChange={handleChange}
        value={values.photo}
        name="photo"
        type="text"
      />
      <Area
        onChange={handleChange}
        value={values.about}
        name="about"
        cols="30"
        rows="10"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default ProfileEditForm;
