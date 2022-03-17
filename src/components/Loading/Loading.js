import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <>
      <Container className="m-5 p-5">
        <Row className="justify-content-center align-items-center m-5 p-5">
          <Col md={6} className="text-center">
            <Spinner animation="grow" className="mx-5" />
            <Spinner animation="grow" className="mx-5" />
            <span style={{ fontSize: "4rem" }}>Loading</span>
            <Spinner animation="grow" className="mx-5" />
            <Spinner animation="grow" className="mx-5" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Loading;
