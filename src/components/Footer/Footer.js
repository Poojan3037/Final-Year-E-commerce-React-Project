import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <>
      <Container fluid className="footer">
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="text-center p-5 m-5">
            <Row>
              <Col md={4}>
                <NavLink to="/" className="link">
                  Blog
                </NavLink>
                <NavLink to="/" className="link">
                  Product Index
                </NavLink>
              </Col>
              <Col md={4}>
                <NavLink to="/" className="link">
                  Terms and Conditions
                </NavLink>
                <NavLink to="/" className="link">
                  Category Index
                </NavLink>
              </Col>
              <Col md={4}>
                <NavLink to="/" className="link">
                  Become an Affiliate
                </NavLink>
              </Col>
            </Row>
          </Col>
          <Col md={5} className="text-center p-5 m-5 text-white">
            <h1>FOLLOW US</h1>
            <i className="bi bi-facebook footer-social"></i>
            <i className="bi bi-instagram footer-social"></i>
            <i className="bi bi-twitter footer-social"></i>
            <i className="bi bi-youtube footer-social"></i>
          </Col>
        </Row>
      </Container>

      <Container fluid className="text-center text-white p-5 footer-copyright">
        <p>Copyright 2022 FashionHub All Rights Reserved by FashionHub.</p>
      </Container>
    </>
  );
}

export default Footer;
