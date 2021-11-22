import React from "react";
import Home from "./pages/Home/Home";

const api = {
  baseUrl: "https://api.github.com/",
  cliente_id: "4d0e589ceaf39399fb3b",
  cliente_secret: "77ab8a300c4101ef25ff824dc1a5fa2e35e44979",
};

const App = () => {
  return <Home />;
};

export default App;
