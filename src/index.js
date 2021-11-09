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

import { Navigation, Login, Register } from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  // const [allPosts, setAllPosts] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [filteredPosts, setFilteredPosts] = useState([]);

  return (
    <Router>
      <div id="App">
        <Navigation />
        <Login
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
          setUsername={setUsername}
          username={username}
        />
        <Register
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
          setUsername={setUsername}
          username={username}
        />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
