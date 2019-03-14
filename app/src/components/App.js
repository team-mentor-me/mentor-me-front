import React from "react";
import Login from "./auth/Login";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
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
import ProfileEdit from "./profile/ProfileEdit";

function App(props) {
  function conditionalRendering(Component, additionalProps) {
    if (props.isLoggedIn) {
      return <Component {...additionalProps} />;
    }
    return <Redirect to="/login" />;
  }

  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" exact component={Index} />
        <Route
          path="/search"
          render={props => {
            return conditionalRendering(Search, props);
          }}
        />
        <Route
          path="/ask"
          render={props => {
            return conditionalRendering(Ask, props);
          }}
        />
        <Route
          exact
          path="/conversations"
          render={props => {
            return conditionalRendering(ConversationList, props);
          }}
        />
        <Route
          path="/conversations/:id"
          render={props => {
            return conditionalRendering(Messages, props);
          }}
        />
        <Route
          path="/question/:id"
          render={props => {
            return conditionalRendering(SingleQuestion, props);
          }}
        />
        <Route
          path="/profile/:id"
          render={props => {
            return conditionalRendering(Profile, props);
          }}
        />
        <Route
          path="/delete/:id"
          render={props => {
            return conditionalRendering(SingleQuestion, props);
          }}
        />
        <Route
          path="/delete/:id"
          render={props => {
            return conditionalRendering(Delete, props);
          }}
        />
        <Route
          exact
          path="/edit/:id"
          render={props => {
            return conditionalRendering(EditQuestion, props);
          }}
        />
        <Route
          path="/edit/profile/:id"
          render={props => {
            return conditionalRendering(ProfileEdit, props);
          }}
        />

        {props.isLoggedIn && <Footer user={props.user} />}
      </>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.currentUser.isLoggedIn,
  user: state.currentUser
});

export default connect(mapStateToProps)(App);
