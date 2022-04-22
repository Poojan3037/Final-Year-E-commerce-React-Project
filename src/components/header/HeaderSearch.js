import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HeaderSearch.css";

function HeaderSearch() {
  return (
    <>
      <Container className="header-search-container">
        <Row className=" justify-content-between align-items-center header-search">
          <Col md={3}>
            <h1 className="header-title">FashionHub</h1>
          </Col>
          <Col md={3} className="text-md-end text-sm-center">
            <input type="text" placeholder="Search" className="search-input" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeaderSearch;
