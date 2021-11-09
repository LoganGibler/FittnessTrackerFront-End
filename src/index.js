import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getToken } from "./auth";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  useHistory,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import { Navigation } from "./components";

const App = () => {
  return (
    <Router>
      <div id="App">
        <Navigation />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
