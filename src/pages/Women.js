import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import HeaderFooter from "../components/header/HeaderFooter";
import HeaderNav from "../components/header/HeaderNav";
import HeaderSearch from "../components/header/HeaderSearch";
import Product from "../components/Products/Product";
import { productSliceAction } from "../slices/productSlice";
import "./common.css";

function Women() {
  const dispatch = useDispatch();
  const [activeBtn, setActiveBtn] = useState("All Products");
  const [rangeValue, setRangeValue] = useState(3000);

  const products = useSelector((state) => state.products.copyProducts);
  const loading = useSelector((state) => state.products.loading);

  const getWomenAllProducts = () => {
    dispatch(productSliceAction.getWomenProducts());
    setActiveBtn("All Products");
  };

  const getClothes = () => {
    dispatch(productSliceAction.getWomenClothes());
    setActiveBtn("Clothes");
  };

  const getShoes = () => {
    dispatch(productSliceAction.getWomenShoes());
    setActiveBtn("Shoes");
  };

  const getWatch = () => {
    dispatch(productSliceAction.getWomenWatch());
    setActiveBtn("Watch");
  };

  useEffect(() => {
    getWomenAllProducts();
  }, []);

  return (
    <>
      {/* Header */}
      <HeaderNav />
      <HeaderSearch />
      <HeaderFooter />

      <Container className="main-container p-5 shadow-lg">
        <Row className="justify-content-center align-items-center product-heading mt-4">
          <Col md={4} className="text-center">
            <h1 className="styled-font text-orange ">Women Products</h1>
          </Col>
        </Row>
        <Row className="justify-content-evenly">
          <Col className="sidebar" md={4} sm={6} xl={2}>
            <p className="mt-3 mb-0">Price Range : ₹0 - ₹{rangeValue}</p>
            <Form.Range
              min="40"
              max="3000"
              step="10"
              value={rangeValue}
              className="range-input"
              onChange={(e) => setRangeValue(e.target.value)}
            />
            <button
              className={
                activeBtn === "All Products"
                  ? "active-sidebar-btn"
                  : "sidebar-btn"
              }
              onClick={getWomenAllProducts}
            >
              All Products
            </button>
            <button
              className={
                activeBtn === "Clothes" ? "active-sidebar-btn" : "sidebar-btn"
              }
              onClick={getClothes}
            >
              Clothes
            </button>
            <button
              className={
                activeBtn === "Shoes" ? "active-sidebar-btn" : "sidebar-btn"
              }
              onClick={getShoes}
            >
              Shoes
            </button>
            <button
              className={
                activeBtn === "Watch" ? "active-sidebar-btn" : "sidebar-btn"
              }
              onClick={getWatch}
            >
              Watch
            </button>
          </Col>
          <Col md={10}>
            {loading && <h1>....Loading....</h1>}
            {!loading && (
              <Row className="justify-content-evenly">
                {products.length > 0 &&
                  products
                    .filter((item) => {
                      if (parseInt(item.price) <= rangeValue) {
                        return item;
                      }
                    })
                    .map((item) => {
                      return <Product key={item.id} product={item} />;
                    })}
              </Row>
            )}
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Women;
