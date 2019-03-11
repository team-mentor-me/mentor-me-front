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
import ProfileMentor from "./profile/ProfileMentor";
import ProfileStudent from "./profile/ProfileStudent";

function App(props) {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Route path="/" exact component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/search" component={Search} />
        <Route path="/ask" component={Ask} />
        <Route path="/conversation/:id" component={Messages} />
        <Route path="/question/:id" component={SingleQuestion} />
        <Route path="/profile/ProfileMentor" component={ProfileMentor}/>
        <Route path="/profile/ProfileStudent" component={ProfileStudent}/>
       {/* <Route
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
  isLoggedIn: state.isLoggedIn,
  user: state.currentUser
});

export default connect(mapStateToProps)(App);
