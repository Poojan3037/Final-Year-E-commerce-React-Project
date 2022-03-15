import React, { useEffect, useState } from "react";
import "./auth.css";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { Col, Container, Row } from "react-bootstrap";

import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (password === rePassword) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              setEmail("");
              setName("");
              setPassword("");
              setRePassword("");

              navigate("/login");
            })
            .catch((error) => {});

          console.log("Registered user: ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage.slice(9));
        });
    } else {
      setError("password and confirm password is not same");
    }
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setError("");
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, [error]);

  return (
    <>
      <Container
        fluid
        className="auth-container d-flex flex-column justify-content-center align-items-center"
      >
        <Row className="justify-content-center align-items-center auth-row">
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center auth-left p-5"
          >
            <img src="./monitoring.png" alt="signup" className="auth-img" />
            <NavLink to="/login" className="auth-link">
              I am already a member
            </NavLink>
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center p-5"
          >
            <h1 className="header-title">FashionHub</h1>
            <h2 className="auth-title">Sign up</h2>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="auth-input"
            />

            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
            />

            <input
              type="password"
              placeholder="Password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              className="auth-input"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
            />

            <button className="auth-btn" onClick={handleSubmit}>
              Register
            </button>

            <p>{error}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SignUp;
