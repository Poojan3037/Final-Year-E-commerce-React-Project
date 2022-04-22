import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ClientReview.css";

const ClientReviews = () => {
  return (
    <Container fluid className="client-review-container p-5">
      <Container>
        <div className="text-center">
          <h1 className="text-center mt-4 text-white text-underline d-inline styled-font">
            Our Loyal Customers Reviews
          </h1>
        </div>
        <Row className="justify-content-evenly p-5">
          <Col md={3} className="client-review text-center text-white p-3 mt-2">
            <img src="/client-1.png" />
            <h2 className="my-3">EMMA WATSON</h2>
            <h4 className="text-underline d-inline mb-2">Loyal Customer</h4>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et suscipit mi. Etiam eget eros quam. Nunc consectetur sed ipsum
              at vestibulum.
            </p>
          </Col>
          <Col md={3} className="client-review text-center text-white p-3 mt-2">
            <img src="/client-2.png" />
            <h2 className="my-3">PATRICIA SMITH</h2>
            <h4 className="text-underline d-inline mb-2 ">Loyal Customer</h4>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et suscipit mi. Etiam eget eros quam. Nunc consectetur sed ipsum
              at vestibulum.
            </p>
          </Col>
          <Col md={3} className="client-review text-center text-white p-3 mt-2">
            <img src="/client-3.png" />
            <h2 className="my-3">MITCHEL JOHNSON</h2>
            <h4 className="text-underline d-inline mb-2">Loyal Customer</h4>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              et suscipit mi. Etiam eget eros quam. Nunc consectetur sed ipsum
              at vestibulum.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ClientReviews;
