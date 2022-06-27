import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetails from "../pages/ProductDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/products" element={<AllProducts/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/products/:id" element={<ProductDetails/>} />
    </Routes>
  )
}

export default Routers