import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  const history = useHistory();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Nav.Link
              type="submit"
              onClick={() => {
                history.push("/Home");
              }}
            >
              FitnessTracker
            </Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              type="submit"
              onClick={() => {
                history.push("/Home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              type="submit"
              onClick={() => {
                history.push("/Login");
              }}
            >
              Login
            </Nav.Link>
            <Nav.Link
              type="submit"
              onClick={() => {
                history.push("/Register");
              }}
            >
              Register
            </Nav.Link>
            <Nav.Link
              type="submit"
              onClick={() => {
                history.push("/MyRoutines");
              }}
            >
              My Routines
            </Nav.Link>
            <Nav.Link
              type="submit"
              onClick={() => {
                history.push("/Routines");
              }}
            >
              Routines
            </Nav.Link>
            <Nav.Link
              type="submit"
              onClick={() => {
                history.push("/Activities");
              }}
            >
              Activities
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
