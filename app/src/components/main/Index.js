import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Index(props) {
  console.log(props.isLoggedIn);
  if (!props.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Main Page</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(Index);
