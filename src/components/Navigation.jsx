import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Nav.Link>FitnessTracker</Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Register</Nav.Link>
            <Nav.Link>My Routines</Nav.Link>
            <Nav.Link>Activities</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
