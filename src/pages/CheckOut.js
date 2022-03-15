import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderFooter from "../components/header/HeaderFooter";
import HeaderNav from "../components/header/HeaderNav";
import HeaderSearch from "../components/header/HeaderSearch";
import { db } from "../firebaseConfig";
import { cartSliceAction } from "../slices/CartSlice";
import "./CheckOut.css";

const CheckOut = () => {
  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const [show, setShow] = useState(true);

  const [orderDetails, setOrderDetails] = useState({
    name: "",
    number: "",
    house: "",
    area: "",
    landmark: "",
    pincode: "",
    state: "",
    city: "",
  });

  const [msg, setMsg] = useState({
    status: "",
    code: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

  const handleCheckOut = async () => {
    let obj = {
      name: orderDetails.name,
      number: orderDetails.number,
      house: orderDetails.house,
      area: orderDetails.area,
      landmark: orderDetails.landmark,
      pincode: orderDetails.pincode,
      state: orderDetails.state,
      city: orderDetails.city,
      userDetails: {
        id: user.uid,
        email: user.email,
      },
      orderList: cart,
      total: total,
      orderDate: new Date().getTime(),
    };

    const docRef = collection(db, "orders");
    await addDoc(docRef, obj);

    setMsg({
      code: "Your order has been placed successfully",
      status: "success",
    });

    dispatch(cartSliceAction.clearCart());
    dispatch(cartSliceAction.updateTotal());
    setShow(true);
  };

  return (
    <>
      {user ? (
        <>
          <HeaderNav />
          <HeaderSearch />
          <HeaderFooter />

          <Container className="p-5">
            {msg.code && show ? (
              <Alert
                variant={msg.status === "success" ? "success" : "danger"}
                onClose={() => setShow(false)}
                dismissible
              >
                <Alert.Heading className="text-center">
                  {msg.code}
                </Alert.Heading>
              </Alert>
            ) : (
              <></>
            )}
            <Row className="justify-content-between">
              <Col md={5}>
                <h1 className=" mb-5 checkout-heading">Shipping Information</h1>

                <div className="text-center">
                  <input
                    className="shipping-input m-3"
                    required
                    type="text"
                    placeholder="Full name"
                    name="name"
                    value={orderDetails.name}
                    onChange={handleChange}
                  ></input>
                  <input
                    className="shipping-input  m-3"
                    required
                    type="text"
                    placeholder="Mobile number"
                    name="number"
                    value={orderDetails.number}
                    onChange={handleChange}
                  ></input>

                  <input
                    className="shipping-input  m-3"
                    required
                    type="text"
                    placeholder="Flat,House no.,Building,Company,Apartment"
                    name="house"
                    value={orderDetails.house}
                    onChange={handleChange}
                  ></input>
                  <input
                    className="shipping-input  m-3"
                    required
                    type="text"
                    placeholder="Area,Colony,Street,Sector,Village"
                    name="area"
                    value={orderDetails.area}
                    onChange={handleChange}
                  ></input>
                  <input
                    className="shipping-input  m-3"
                    required
                    type="text"
                    placeholder="Landmark e.g near Apollo Hospital"
                    name="landmark"
                    value={orderDetails.landmark}
                    onChange={handleChange}
                  ></input>
                  <input
                    className="shipping-input  m-3"
                    required
                    type="text"
                    placeholder="Pincode"
                    name="pincode"
                    value={orderDetails.pincode}
                    onChange={handleChange}
                  ></input>
                  <input
                    className="shipping-input  m-3"
                    required
                    type="text"
                    placeholder="Town/City"
                    name="city"
                    value={orderDetails.city}
                    onChange={handleChange}
                  ></input>
                  <input
                    className="shipping-input  m-3"
                    required
                    type="text"
                    placeholder="State"
                    name="state"
                    value={orderDetails.state}
                    onChange={handleChange}
                  ></input>
                </div>
              </Col>
              <Col md={5}>
                <h1 className=" mb-5 checkout-heading">Payment Option</h1>
                <div className="text-center">
                  <h2 className="mb-5">Your Total : $ {total}</h2>
                  <button className="checkout-btn " onClick={handleCheckOut}>
                    Proceed with Cash on Delivery
                  </button>
                  <p>or</p>
                </div>
              </Col>
            </Row>
          </Container>

          <Footer />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default CheckOut;
