import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Complete.css";

const Complete = () => {
  const navigate = useNavigate();

  const handleGoTo = () => {
    navigate("/");
  };

  return (
    <>
      <Container className="py-5 my-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-1">Thank You !</h1>
        <h2 className="display-5">Your Order Has Been Successfully Placed</h2>
        <img
          src="/done.png"
          alt="no item"
          width="150px"
          height="150px"
          className="my-3 hero-img"
        />
        <button className="thank-btn mt-5" onClick={handleGoTo}>
          Go To Home Page
        </button>
      </Container>
    </>
  );
};

export default Complete;
