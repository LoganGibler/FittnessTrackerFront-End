import React, { useState, useEffect } from "react";
import { Form, Button, Col, ButtonToolbar } from "react-bootstrap";
import { getToken, storeToken } from "../auth";
import { registerUser } from "../api";
import { useHistory } from "react-router-dom";
const Register = ({isLoggedIn, setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  return (
    <Col md={{ span: 4, offset: 1 }}>
      Register form
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const { data } = await registerUser(username, password);
            setIsLoggedIn(true)
          } catch (error) {
            console.log(error.message);
          } finally {
            history.push("/Login");
          }
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Create Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="usernames"
            value={username}
            onChange={(event) => {
              // console.log(event.target.value)
              console.log(username);
              setUsername(event.target.value)
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your username or password with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Create Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>
        <ButtonToolbar className="mb-2">
          <Button variant="primary" type="submit">
            Register
          </Button>
        </ButtonToolbar>
      </Form>
    </Col>
  );
};

export default Register;
