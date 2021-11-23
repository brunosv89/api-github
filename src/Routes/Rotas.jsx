import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Pages/Home/Home";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Rotas;
