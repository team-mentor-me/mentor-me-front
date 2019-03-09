import React from "react";
import Login from "./auth/Login";
import { Route, BrowserRouter } from "react-router-dom";
import Index from "./main/Index";
import SignUp from "./auth/SignUp";
import { createGlobalStyle } from "styled-components";
import SingleQuestion from "./singleQuestion/SingleQuestion";
import Search from "./main/Search";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
	box-sizing: border-box;
}

html, body {
	font-size: 62.5%;
	font-family: sans-serif;
}
`;

function App() {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Route path="/" exact component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/search" component={Search} />
        <Route path="/question/:id" component={SingleQuestion} />
      </>
    </BrowserRouter>
  );
}

export default App;
