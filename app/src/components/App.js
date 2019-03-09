import React from "react";
import Login from "./auth/Login";
import { Route, BrowserRouter } from "react-router-dom";
import Index from "./main/Index";
import SignUp from "./auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <>
        <Route path="/" exact component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </>
    </BrowserRouter>
  );
}

export default App;
