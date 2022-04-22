import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Advertise.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Advertise() {
  AOS.init({
    offset: 300, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
  });

  return (
    <>
      {/* <Container fluid className='advertise-container'>
            </Container> */}

      <Container>
        <Row className="advertise-links">
          <Col md={4} data-aos="fade-right">
            <NavLink to="/men">
              <div className="men-bg hover-bg"></div>
            </NavLink>
          </Col>
          <Col md={4} data-aos="fade-down">
            <NavLink to="/watch">
              <div className="watch-bg hover-bg"></div>
            </NavLink>

            <NavLink to="/shoes">
              <div className="shoes-bg hover-bg"></div>
            </NavLink>
          </Col>
          <Col md={4} data-aos="fade-left">
            <NavLink to="/women">
              <div className="women-bg hover-bg"></div>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Advertise;
