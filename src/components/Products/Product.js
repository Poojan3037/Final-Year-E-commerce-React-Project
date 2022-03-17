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

  AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 300, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger
  });

  const openShowProduct = () => {
    navigate("/productDetails");
    dispatch(productSliceAction.setSingleProductDetails(props.product));
  };

  return (
    <>
      <Col md={3} data-aos="fade-up">
        <Card className="text-center product-card">
          <Card.Img variant="top" src={img} className="product-img" />
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
            <h1 className="price-text">$ {price}</h1>
            <button className="product-btn" onClick={openShowProduct}>
              Add To Cart
            </button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Product;
