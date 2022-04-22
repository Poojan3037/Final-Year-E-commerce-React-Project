import React from "react";
import { Container } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <Container fluid className="hero-container">
        <div className="hero-img-conatiner"></div>
        <div className="hero-text-container">
          <h1 className="styled-font">Get the latest in spring fashions</h1>
          <h1 className="styled-font">for men & women now</h1>
        </div>
      </Container>
    </>
  );
};

export default Hero;
