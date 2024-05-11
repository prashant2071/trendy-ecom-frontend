import React, { useState } from "react";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setisLoading] = useState(false);

  const loginSubmitHandler = async (e) =>{
    e.preventDefault();
    setisLoading(true)
    console.log("the email is",email,"password is ",password)
    console.log("the email",email)
    const response = await axios.post(import.meta.env.VITE_SERVER_URL+"/api/v1/auth/login",{email,password})
    console.log("the response ",response);
    if(response.data.status==="success"){
      console.log("success")
      setisLoading(false);
      
    }
    console.log("the response is ",response)

  }
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="mb-4">Sign In</h1>
          <Form>
            <TextField
              variant="outlined"
              type="email"
              placeholder="abc@example.com"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              className="mb-4"
              label="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></TextField>
            <TextField
              variant="outlined"
              type="password"
              placeholder="*******"
              required
              fullWidth
              id="password"
              name="password"
              className="mb-2"
              autoComplete="password"
              label="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              onClick={loginSubmitHandler}
            >
              {loading?<CircularProgress/>:<>Sign in</> }
            </Button>
          </Form>
          <Row>
            <Col>New User ? <Link to={"/signup" }>Register</Link></Col>
            <Col className="text-right">Forget password</Col>

          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
