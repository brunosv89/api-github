import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Pages/Home/Home";
import Repos from "../Pages/Repos/Repos";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repos" element={<Repos />} />
    </Routes>
  );
};

export default Rotas;
