import React, { useState } from "react";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../slice/loginSlice";
import {
  errorToast,
  successToast,
  warningToast,
} from "../services/toastConfig";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    setisLoading(true);
    // console.log("the email is", email, "password is ", password);
    // console.log("the email", email);
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_SERVER_URL + "/api/v1/auth/login",
        { email, password }
      );
      console.log("the response ", data.status == "success");
      if (data.status=="success") {
        console.log("the message", data);
        successToast("login successfully");
        let loginData = {
          name: data.authData.name,
          email: data.authData.email,
          role: data.authData.role,
          token: data.token,
        };
        dispatch(login(loginData));
        navigate('/home')
      }
      setisLoading(false);
    } catch (err) {
      errorToast(err.response.data.error);
      setisLoading(false);
    }
  };

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
              {loading ? <CircularProgress /> : <>Sign in</>}
            </Button>
          </Form>
          <Row>
            <Col>
              New User ? <Link to={"/signup"}>Register</Link>
            </Col>
            <Col className="text-right">Forget password</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
