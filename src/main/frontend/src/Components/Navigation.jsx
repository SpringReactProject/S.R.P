import React from "react";
import {
  Navbar,
  Container,
  Form,
  Button,
  Nav,
  FormControl,
  Col,
  Row,
} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const menuList = ["menu1", "menu2", "menu3", "menu4", "menu5"];
  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };
  return (
    <div>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Row>
              <div onClick={goToHome}>
                <img
                  width={100}
                  src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                  alt="log"
                />
              </div>
            </Row>
            <Row>
              <Navbar.Toggle
                fixed="top"
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Logo
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div>
                    <Nav className="menu-list flex-grow-1 pe-3">
                      {menuList.map((menu) => (
                        <Nav.Link>{menu}</Nav.Link>
                      ))}
                    </Nav>
                  </div>

                  <div
                    className="login row align-items-center"
                    onClick={goToLogin}
                  >
                    <div>Login</div>
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Row>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Navigation;
