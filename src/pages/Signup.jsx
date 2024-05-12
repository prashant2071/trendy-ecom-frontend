import React, { useState } from "react";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { errorToast, warningToast } from "../services/toastConfig";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setisLoading] = useState(false);
  const navigate = useNavigate();

  const SignUpSubmitHandler = async (e) => {
    e.preventDefault();
    setisLoading(true);
    console.log("the email is", email, "password is ", password);
    console.log("the email", email);
    if (password !== confirmPassword) {
      warningToast("password and confirm doesn't match");
    } else {
      try {
        const { data } = await axios.post(
          import.meta.env.VITE_SERVER_URL + "/api/v1/auth/register",
          { name, email, password }
        );
        console.log("the response.data ", response.data.status);
        if (data.status == "true") {
          console.log("success");
          navigate("/");
        }
        setisLoading(false);
      } catch ({response}) {
        errorToast(response.data.error)
        console.log("the error is ", response.data.error);
        setisLoading(false);
      }
    }
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="mb-4">Sign In</h1>
          <Form onSubmit={SignUpSubmitHandler}>
            <TextField
              variant="outlined"
              type="text"
              placeholder="name"
              required
              fullWidth
              id="name"
              name="name"
              autoComplete="name"
              autoFocus
              className="mb-4"
              label="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></TextField>
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
            <TextField
              variant="outlined"
              type="password"
              placeholder="*******"
              required
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              className="mb-2"
              autoComplete="confirmPassword"
              label="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? <CircularProgress /> : <>Sign in</>}
            </Button>
          </Form>
          <Row>
            <Col>
              Already have an account ? <Link to={"/"}>sign in</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
