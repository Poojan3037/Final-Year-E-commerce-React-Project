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
  } = props.item;

  return (
    <>
      <Col md={12} className="order-container p-5 my-5">
        <h5>Your Order Placed On {orderDate}</h5>
        <p>{name}</p>
        <p>{house},</p>
        <p>{area},</p>
        <p>{landmark},</p>
        <p>
          {city},{state}-{pincode}
        </p>
        <p>Mob No.-{number}</p>

        <Row className=" mt-5 p-3">
          {orderList.map((item) => {
            return (
              <Col key={item.id} md={5} className="order">
                <Row>
                  <Col md={4}>
                    <img src={item.img} height="150" width="100" />
                  </Col>
                  <Col md={6}>
                    <h4>{item.title}</h4>
                    <p className="m-0">Color : {item.color}</p>
                    {item.size && <p className="m-0">Size : {item.size}</p>}
                    <p className="m-0">Price : $ {item.price}</p>
                    <p className="m-0">Quantity : {item.quantity}</p>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Col>
    </>
  );
};

export default Order;
