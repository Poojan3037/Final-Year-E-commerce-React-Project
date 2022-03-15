import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSliceAction } from "../../slices/AuthSlice";
import "./auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const dispatch = useDispatch();

  const navigation = useNavigate();

  const handleSubmit = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        let newObj = {
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
        };
        if (user) {
          dispatch(authSliceAction.setUser(newObj));
          navigation("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage.slice(9));
      });
  };

  const handleGoogleAuth = async () => {
    await signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        let newObj = {
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
        };

        if (user) {
          dispatch(authSliceAction.setUser(newObj));
          navigation("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;

        setError(errorMessage.slice(9));
      });
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
            className="d-flex flex-column justify-content-center align-items-center p-5"
          >
            <h1 className="header-title">FashionHub</h1>
            <h2 className="auth-title">Sign in</h2>

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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
            />

            <button className="auth-btn" onClick={handleSubmit}>
              Log in
            </button>

            <p>{error}</p>

            <h2 className="text-center m-5">or</h2>

            <button className="google-auth-btn" onClick={handleGoogleAuth}>
              <i className="bi bi-google footer-social"></i> Sign in with Google
            </button>
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center auth-left p-5"
          >
            <img src="./monitoring.png" alt="signup" className="auth-img" />
            <NavLink to="/signup" className="auth-link">
              Create an account
            </NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
