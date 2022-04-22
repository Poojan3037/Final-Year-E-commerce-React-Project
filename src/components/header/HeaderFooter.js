import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./HeaderFooter.css";

function HeaderFooter() {
  return (
    <>
      <Container fluid className="header-footer">
        <Container>
          <Row className="justify-content-center align-items-center header-footer-container">
            <Col md={6} className="text-center">
              <NavLink
                to="/men"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                Men
              </NavLink>
              <NavLink
                to="/women"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                Women
              </NavLink>
              <NavLink
                to="/clothes"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                Clothes
              </NavLink>
              <NavLink
                to="/watch"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                Watch
              </NavLink>
              <NavLink
                to="/shoes"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                Shoes
              </NavLink>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default HeaderFooter;
