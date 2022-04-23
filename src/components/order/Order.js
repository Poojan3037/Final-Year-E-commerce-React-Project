import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Order.css";

const Order = (props) => {
  const {
    area,
    city,
    house,
    id,
    landmark,
    name,
    number,
    orderDate,
    orderList,
    pincode,
    state,
    total,
    orderTime,
    paymentMethod,
  } = props.item;

  return (
    <>
      <Col md={5} className="order-container p-5 m-5 shadow-lg rounded">
        <h5>
          <i className="bi bi-calendar-check me-3 order-icon"></i>
          Your Order Placed On {orderDate}
        </h5>
        <p>
          {" "}
          <i className="bi bi-house-door-fill me-3 order-icon"></i>
          {house} , {area} , {landmark} , {city} , {state}-{pincode}
        </p>
        <p>
          <i className="bi bi-telephone-fill me-3 order-icon"></i> {number}
        </p>
        <Row className=" mt-5 p-3 justify-content-between">
          {orderList.map((item) => {
            return (
              <Col key={item.id} md={6} className="order">
                <img
                  src={item.img}
                  height="70"
                  width="70"
                  className="order-img"
                />
                <h4>{item.title}</h4>
                <p className="m-0">
                  <spna className="text-primary-custom">Color :</spna>{" "}
                  {item.color}
                </p>
                {item.size && (
                  <p className="m-0">
                    <span className="text-primary-custom">Size :</span>{" "}
                    {item.size}
                  </p>
                )}
                <p className="m-0 text-primary-custom">x {item.quantity}</p>
                <p className="m-0">
                  <span className="text-primary-custom">Price :</span> ₹{" "}
                  {item.price}
                </p>
              </Col>
            );
          })}
        </Row>
        <div className="d-flex align-items-center">
          <img src="money.png" className="payment-icon me-1" />
          <p className="m-0 mt-2 text-capitalize  text-center text-primary-custom">
            Payment with {paymentMethod}
          </p>
        </div>
      </Col>
    </>
  );
};

export default Order;
