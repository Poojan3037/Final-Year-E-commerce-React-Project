import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./ResponsiveNav.css";
import { authSliceAction } from "../../slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const user = useSelector((state) => state.auth.user);

  const auth = getAuth();

  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth);
    dispatch(authSliceAction.logOutUser());
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={toggleShow}
        className="me-2 hamburg-icon"
      >
        <i className="bi bi-list"></i>
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        scroll
        backdrop
        placement="end"
        style={{ width: "50%" }}
      >
        <Offcanvas.Body>
          <div className="sidebar">
            <div className="sidebar-close">
              <button onClick={() => setShow(false)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="sidebar-menu">
              <h1>Menu Items</h1>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link2" : "link2"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link2" : "link2"
                }
              >
                About us
              </NavLink>
              <NavLink
                to="/yourorder"
                className={({ isActive }) =>
                  isActive ? "active-link2" : "link2"
                }
              >
                Your Orders
              </NavLink>
            </div>
            <div className="sidebar-categories">
              <h1>categories</h1>
              <NavLink
                to="/men"
                className={({ isActive }) =>
                  isActive ? "active-link2" : "link2"
                }
              >
                Men
              </NavLink>
              <NavLink
                to="/women"
                className={({ isActive }) =>
                  isActive ? "active-link2" : "link2"
                }
              >
                Women
              </NavLink>
              <NavLink
                to="/clothes"
                className={({ isActive }) =>
                  isActive ? "active-link2" : "link2"
                }
              >
                Clothes
              </NavLink>
              <NavLink
                to="/watch"
                className={({ isActive }) =>
                  isActive ? "active-link2" : "link2"
                }
              >
                Watch
              </NavLink>
              <NavLink
                to="/shoes"
                className={({ isActive }) =>
                  isActive ? "active-link2" : "link2"
                }
              >
                Shoes
              </NavLink>
            </div>
            <div className="sidebar-account">
              <h1>User</h1>

              <NavLink to="/" className="link2">
                {user ? `Hello , ${user.displayName}` : `Hello,Guest`}
              </NavLink>

              {!user && (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active-link2" : "link2"
                  }
                >
                  Login
                </NavLink>
              )}

              {user && (
                <button onClick={handleLogout} className="header-btn mt-2">
                  Logout
                </button>
              )}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;
