import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product";
import "./Main.css";
import { useSelector } from "react-redux";

function Main() {
  const products = useSelector((state) => state.products.copyProducts);

  return (
    <>
      <Container className="main-container shadow-lg  bg-light">
        <Row className="justify-content-center align-items-center product-heading mt-4">
          <Col md={4} className="text-center p-3">
            <h1 className="styled-font text-orange ">Featured Products</h1>
          </Col>
        </Row>
        <Row className="justify-content-evenly">
          {products.length > 0 &&
            products.map((item) => {
              return <Product key={item.id} product={item} />;
            })}
        </Row>
      </Container>
    </>
  );
}

export default Main;
