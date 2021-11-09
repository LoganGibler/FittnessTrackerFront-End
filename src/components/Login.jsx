import React, { useState, useEffect } from "react";
import { Form, Button, Col, ButtonToolbar, FormGroup } from "react-bootstrap";
// import { loginUser } from "../api";
// import { storeToken } from "../auth";
import { useHistory } from "react-router-dom";

const Login = ({ isLoggedIn, setIsLoggedIn, setUsername, username }) =>{
    let history = useHistory();

    let [password, setPassword] = useState("");
  
    return (
      <Col md={{ span: 4, offset: 1 }}>
        Login Form
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const { data } = await loginUser(username, password);
              storeToken(data.token);
              console.log(data.token, "login component");
            } catch (error) {
              console.log(error.message);
            } finally {
              setIsLoggedIn(true);
              history.push("/Home");
            }
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="usernames"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> enter password</Form.Label>
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
              Login
            </Button>
            <Button variant="secondary" type="submit" onClick={(e)=>{
              history.push("/register")
            }}>
              Don't have an account?
            </Button>
          </ButtonToolbar>
        </Form>
      </Col>
    );
  
    // let logoutButton = (
    //   <ButtonToolbar className="mb-2">
    //     <Button variant="primary">Logout</Button>
    //   </ButtonToolbar>
    // );
    // return isLoggedIn ? logoutButton : loginForm;
};


export default Login;












