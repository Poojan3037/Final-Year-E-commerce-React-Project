import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Review.css";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

const Review = (props) => {
  const { id, username, date, comment } = props.item;
  return (
    <>
      <Card className="my-5 bg-light">
        <Card.Body>
          <div className="review-header">
            <Avatar className="me-3" alt={username.toUpperCase()} src="/" />
            <h3>@{username}</h3>
          </div>
          <Rating
            name="half-rating"
            defaultValue={4}
            precision={0.5}
            className="review-ratings mt-3"
            readOnly
          />
          <Card.Text className="mb-3">{comment}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">posted on {date} </Card.Footer>
      </Card>
    </>
  );
};

export default Review;
