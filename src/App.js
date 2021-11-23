import React from "react";
import Rotas from "./Routes/Rotas";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./context/Context";

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Rotas />
      </ContextProvider>
    </Router>
  );
};

export default App;
