import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./Product.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productSliceAction } from "../../slices/productSlice";
import Rating from "@mui/material/Rating";

function Product(props) {
  const { img, colors, title, price, ratings } = props.product;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const openShowProduct = () => {
    navigate("/productDetails");
    dispatch(productSliceAction.setSingleProductDetails(props.product));
  };

  return (
    <>
      <Col md={6} xl={3} data-aos="fade-up" className="mt-5 mx-5">
        <Card className="text-center product-card shadow-lg rounded-5">
          <div className="product-img-container p-5">
            <Card.Img variant="top" src={img} className="product-img" />
          </div>
          <Card.Body>
            <Card.Title>
              <h5>{title}</h5>
            </Card.Title>

            <Rating
              name="half-rating"
              defaultValue={parseInt(ratings)}
              precision={0.5}
              className="ratings"
              readOnly
            />
            <h1 className="price-text">₹ {price}</h1>
            <button className="product-btn p-1" onClick={openShowProduct}>
              <i className="bi bi-cart3 cart-icon"></i> Add To Cart
            </button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Product;
