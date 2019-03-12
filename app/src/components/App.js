import React from "react";
import Login from "./auth/Login";
import { Route, BrowserRouter } from "react-router-dom";
import Index from "./main/Index";
import SignUp from "./auth/SignUp";
import { GlobalStyle } from "../utils/globals";
import SingleQuestion from "./singleQuestion/SingleQuestion";
import Search from "./main/Search";
import { connect } from "react-redux";
import Footer from "./main/Footer";
import Ask from "./ask/Ask";
import Messages from "./messages/Messages";
import Profile from "./profile/Profile";


function App(props) {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" exact component={Index} />
        <Route path="/search" component={Search} />
        <Route path="/ask" component={Ask} />
        <Route path="/conversation/:id" component={Messages} />
        <Route path="/question/:id" component={SingleQuestion} />
        <Route path="/profile" component={Profile}/>
       {/*  
      <Route
          path="/profile"
          render={propss => {
            return props.user.status === "mentor" ? (
              <ProfileMentor {...propss} />
            ) : (
              <ProfileStudent {...propss} />
            );
          }}
        />*/}
        {props.isLoggedIn && <Footer />}
      </>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.currentUser.isLoggedIn,
  user: state.currentUser
});

export default connect(mapStateToProps)(App);
