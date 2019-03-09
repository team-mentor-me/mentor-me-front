import React from "react";
import Login from "./auth/Login";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Route path="/" exact render={() => <h1>Main Page</h1>} />
        <Route path="/login" component={Login} />
      </>
    </BrowserRouter>
  );
}

export default App;
