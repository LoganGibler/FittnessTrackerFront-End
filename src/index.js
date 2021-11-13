import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getToken } from "./auth";
import { getActivities, getRoutines } from "./api";

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

import { Navigation, Login, Register, Activities, Routines, Home } from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [allActivities, setAllActivities] = useState([]);
  const [allRoutines, setAllRoutines] = useState([]);


  const needToken = async () => {
    const myToken = getToken()
    console.log("this is token", token)
  }
  useEffect(async () => {
    const data = await getActivities();
    setAllActivities(data);
  }, []);

  useEffect(async () => {
    const data =await getRoutines();
    setAllRoutines(data);
  }, []);

  useEffect(async () => {
    
  }, []);
  
  return (
    <Router>
      <div id="App">
        <Navigation />
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Login">
            <Login
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
              setUsername={setUsername}
              username={username}
            />
          </Route>
          <Route path="/Register">
            <Register
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
              setUsername={setUsername}
              username={username}
            />
          </Route>
          <Route path="/Activities">
            <Activities
              allActivities={allActivities}
            />
          </Route>
          {/* 
          <Route path="/MyRoutines">
            <MyRoutines/>
          </Route>*/}
          <Route path="/Routines">
            <Routines
            allRoutines = {allRoutines}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
