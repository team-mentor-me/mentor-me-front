import React, { useState } from "react";

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
      <input
        onChange={handleChange}
        value={values.name}
        name="name"
        type="text"
      />
      <input
        onChange={handleChange}
        value={values.role}
        name="role"
        type="text"
      />
      <input
        onChange={handleChange}
        value={values.photo}
        name="photo"
        type="text"
      />
      <textarea
        onChange={handleChange}
        value={values.about}
        name="about"
        cols="30"
        rows="10"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProfileEditForm;
