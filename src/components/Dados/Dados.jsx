import React from "react";
import "./Dados.css";

const Dados = (props) => {
  return (
    <div className="box">
      <h1 className="title">{props.title}</h1>
      <h2 className="number">{props.number}</h2>
    </div>
  );
};

export default Dados;
