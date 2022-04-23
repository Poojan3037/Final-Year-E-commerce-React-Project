import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Complete from "../components/Complete/Complete";
import Footer from "../components/Footer/Footer";
import HeaderFooter from "../components/header/HeaderFooter";
import HeaderNav from "../components/header/HeaderNav";
import HeaderSearch from "../components/header/HeaderSearch";
import { db } from "../firebaseConfig";
import { cartSliceAction } from "../slices/CartSlice";
import "./CheckOut.css";
import StripeCheckout from "react-stripe-checkout";

const CheckOut = () => {
  const total = useSelector((state) => state.cart.total);
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const [complete, setComplete] = useState(false);
  const [error, setError] = useState(false);

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

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setOrderDetails({
      ...orderDetails,
      [name]: value,
    });
  };

  const handleCheckOut = async (token, e) => {
    let date = new Date().toDateString();
    let time = new Date().toTimeString();

    let paymentMethod;
    if (token === "card") {
      paymentMethod = "card";
    } else {
      paymentMethod = "cash on delivery";
    }

    console.log(paymentMethod);

    if (
      orderDetails.name.length > 3 &&
      orderDetails.number &&
      orderDetails.house &&
      orderDetails.area &&
      orderDetails.landmark &&
      orderDetails.pincode &&
      orderDetails.state &&
      orderDetails.city
    ) {
      let obj = {
        name: orderDetails.name,
        number: orderDetails.number,
        house: orderDetails.house,
        area: orderDetails.area,
        landmark: orderDetails.landmark,
        pincode: orderDetails.pincode,
        state: orderDetails.state,
        city: orderDetails.city,

        userId: user.uid,
        userEmail: user.email,

        orderList: cart,
        total: total,
        orderDate: date,
        orderTime: time,
        paymentMethod,
      };

      const docRef = collection(db, "orders");
      await addDoc(docRef, obj);

      dispatch(cartSliceAction.clearCart());
      dispatch(cartSliceAction.updateTotal());

      setComplete(true);
      setError("");
    } else {
      setError("Please Fill All Details");
    }
  };

  return (
    <>
      {user ? (
        <>
          <HeaderNav />
          <HeaderSearch />
          <HeaderFooter />

          {complete ? (
            <Complete />
          ) : (
            <Container className="p-5">
              <Row className="justify-content-evenly">
                <Col md={5} className="bg-light shadow-lg p-5 text-center">
                  <h1 className=" text-center my-5 black-text-underline d-inline styled-font text-orange">
                    Shipping Information
                  </h1>

                  <div className="text-center mt-5">
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
                      maxLength="10"
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
                      maxLength="10"
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
                    {error && (
                      <p className="error">
                        <i className="bi bi-exclamation-circle-fill me-2"></i>
                        {error}
                      </p>
                    )}
                  </div>
                </Col>
                <Col md={5} className="bg-light shadow-lg p-5 text-center">
                  <h1 className="text-center  mb-5 black-text-underline d-inline styled-font text-orange">
                    Payment Option
                  </h1>
                  <div className="text-center mt-5">
                    <h2 className="mb-5">Your Total: ₹ {total}</h2>
                    <button
                      className="checkout-btn "
                      onClick={() => handleCheckOut("cash")}
                    >
                      Proceed with Cash on Delivery
                    </button>
                    <p className="my-3 text-orange ">or</p>
                    <StripeCheckout
                      stripeKey="pk_test_51KqFeASD3AUWv2xurY1A0I1QqqNG1RJ8pkjTbphrFYkORkuGNOFLOPTiyFnv3AGcZHH6wY5A6YtOPzX8fpmqHE2V00t1wflrgy"
                      billingAddress
                      amount={Number(total) * 100}
                      token={() => handleCheckOut("card")}
                      label="Proceed with Online Payment"
                      className="checkout-btn"
                      currency="INR"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          )}

          <Footer />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default CheckOut;
