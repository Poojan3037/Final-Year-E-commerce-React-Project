import React from "react";
import { Route, Routes } from "react-router-dom";
import Clothes from "./pages/Clothes";
import Home from "./pages/Home";
import Men from "./pages/Men";
import ProductDetails from "./pages/ProductDetails";
import Shoes from "./pages/Shoes";
import ShoppingCart from "./pages/ShoppingCart";
import Watch from "./pages/Watch";
import Women from "./pages/Women";


function App() {
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
      </Routes>
    </>
  );
}

export default App;
