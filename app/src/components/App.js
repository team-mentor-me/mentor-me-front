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
import Delete from "./delete/Delete";
import EditQuestion from "./edit/EditQuestion";
import ConversationList from "./conversations/ConversationList";

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
        <Route path="/conversations" component={ConversationList} />
        <Route path="/conversation/:id" component={Messages} />
        <Route path="/question/:id" component={SingleQuestion} />
        <Route path="/profile" component={Profile} />
        <Route path="/delete/:id" component={SingleQuestion} />
        <Route path="/delete/:id" component={Delete} />
        <Route path="/edit/:id" component={EditQuestion} />
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
