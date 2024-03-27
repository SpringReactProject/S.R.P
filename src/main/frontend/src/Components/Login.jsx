import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { TokenAtom, isLoginSelector } from "../Recoil/TokenAtom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setAccessToken = useSetRecoilState(TokenAtom);
  const isLogin = useRecoilValue(isLoginSelector);
  const loginUser = (event) => {
    event.preventDefault();
    console.log();
    navigate("/");
  };
  const Login = () => {
    navigate("/join");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/api/test", { id: id, password: password }).then((res) => {
      console.log(res.data);
      setAccessToken(res.data.accessToken);
    });
  };
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        marginBottom: "0",
        marginTop: "0",
      }}
    >
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setId(e.target.value);
              console.log(id);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="danger" type="submit" onClick={handleSubmit}>
          로그인
        </Button>
        <Button
          variant="light"
          type="button"
          onClick={() => {
            Login();
          }}
          style={{ marginLeft: "5px" }}
        >
          회원가입
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
