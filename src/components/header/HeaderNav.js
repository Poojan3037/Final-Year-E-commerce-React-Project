import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSliceAction } from "../../slices/AuthSlice";
import "./HeaderNav.css";
import OffCanvasExample from "./ResponsiveNav";

function HeaderNav() {
  const cart = useSelector((state) => state.cart.cart);

  const user = useSelector((state) => state.auth.user);

  const auth = getAuth();

  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth);
    dispatch(authSliceAction.logOutUser());
  };

  return (
    <>
      <Container fluid className="header-nav">
        <Container>
          <Row className="justify-content-between align-items-center header-nav-container">
            <Col md={3} sm={12}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/yourorder"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                Your Orders
              </NavLink>
            </Col>
            <Col md={9} sm={12} className="text-md-end text-sm-center">
              <NavLink to="/" className="link">
                {user ? `Hello , ${user.displayName}` : `Hello,Guest`}
              </NavLink>

              <NavLink
                to="/shoppingCart"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
              >
                <i className="bi bi-cart3 cart-icon"></i> Shopping cart (
                {cart.length})
              </NavLink>

              {user && (
                <button onClick={handleLogout} className="header-btn">
                  Logout
                </button>
              )}

              {!user && (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  Login
                </NavLink>
              )}
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="responsive-header sticky-top">
        <Row className="justify-content-center align-items-center">
          <Col xs={2} className="text-center">
            <OffCanvasExample />
          </Col>
          <Col xs={8} className="text-center">
            <h1 className="header-title">FashionHub</h1>
          </Col>
          <Col xs={2} className="text-center">
            <i className="bi bi-cart-fill cart-icon"></i>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeaderNav;
