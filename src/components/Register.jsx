import React, { useState, useEffect } from "react";
import { Form, Button, Col, ButtonToolbar } from "react-bootstrap";

const Register = (props) => {
  const [username, setUsername] = useState("");


  return (
    <Col md={{ span: 4, offset: 1 }}>
      Register form
      <Form 
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const { data } = await registerUser(username, password);
            storeToken(data.token);
          } catch (error) {
            console.log(error.message);
          }
          finally {
            window.location = "/login"
          }
        }}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Create Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="usernames"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <Form.Text className="text-muted">
          We'll never share your username or password with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Create Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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



