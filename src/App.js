import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";
import CheckOut from "./pages/CheckOut";
import Clothes from "./pages/Clothes";
import Home from "./pages/Home";
import Men from "./pages/Men";
import ProductDetails from "./pages/ProductDetails";
import Shoes from "./pages/Shoes";
import ShoppingCart from "./pages/ShoppingCart";
import Watch from "./pages/Watch";
import Women from "./pages/Women";
import { authSliceAction } from "./slices/AuthSlice";

function App() {
  const auth = getAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authSliceAction.setUser(user));
      }
    });
  }, [auth, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </>
  );
}

export default App;
