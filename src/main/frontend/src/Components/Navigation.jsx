import React from "react";
import {
  Navbar,
  Container,
  Form,
  Button,
  Nav,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
const Navigation = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
    console.log("login page");
  };
  return (
    <div>
      <Navbar>
        <Container>
          <Link to="/">로고</Link>
          <br />
          <Link to="/login">로그인</Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
