import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderFooter from "../components/header/HeaderFooter";
import HeaderNav from "../components/header/HeaderNav";
import HeaderSearch from "../components/header/HeaderSearch";
import { cartSliceAction } from "../slices/CartSlice";
import "./ShoppingCart.css";

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const handlePlus = (id) => {
    dispatch(cartSliceAction.plusOneToCart(id));
    dispatch(cartSliceAction.updateTotal());
  };

  const handleMinus = (id) => {
    dispatch(cartSliceAction.minusOneToCart(id));
    dispatch(cartSliceAction.updateTotal());
  };

  const handleRemove = (id) => {
    dispatch(cartSliceAction.removeFromCart(id));
    dispatch(cartSliceAction.updateTotal());
  };

  const handleNavigation = () => {
    if (user) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {/* Header */}
      <HeaderNav />
      <HeaderSearch />
      <HeaderFooter />

      <Container>
        <div className="cart-heading">
          <h1>Shopping Cart</h1>
        </div>

        <Row>
          <Col md={8}>
            {cartItems.map((item) => {
              return (
                <Row key={item.id} className="justify-content-evenly mt-5 p-3">
                  <Col md={5}>
                    <Row>
                      <Col md={4}>
                        <img src={item.img} height="150" width="100" />
                      </Col>
                      <Col md={6}>
                        <p>{item.title}</p>
                        <span
                          className="remove-p"
                          onClick={() => handleRemove(item.id)}
                        >
                          <i className="bi bi-trash"></i> Remove
                        </span>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={2} className="text-center">
                    <p>$ {item.totalPriceOfProduct}</p>
                  </Col>
                  <Col md={3} className="text-center">
                    <Row>
                      <Col xs={4} className="text-end">
                        <button
                          className="control-btn"
                          onClick={() => handleMinus(item.id)}
                        >
                          -
                        </button>
                      </Col>
                      <Col xs={4} className="text-center">
                        <p>{item.quantity}</p>
                      </Col>
                      <Col xs={4} className="text-start">
                        <button
                          className="control-btn"
                          onClick={() => handlePlus(item.id)}
                        >
                          +
                        </button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              );
            })}
          </Col>
          <Col md={3} className="text-center m-5">
            <h2>Order Summary</h2>
            <Row>
              <Col md={6} className="text-center my-5">
                <h3>Total</h3>
              </Col>
              <Col md={6} className="text-center my-5">
                <h3>$ {total}</h3>
              </Col>
            </Row>
            {total > 0 && (
              <button className="checkout-btn" onClick={handleNavigation}>
                Proceed to chekout
              </button>
            )}
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default ShoppingCart;
