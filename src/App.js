import React from "react";
import Rotas from "./Routes/Rotas";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Rotas />
    </Router>
  );
};

export default App;
