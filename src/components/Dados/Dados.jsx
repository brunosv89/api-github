import React from "react";
import "./Dados.css";
import { useNavigate } from "react-router";

const Dados = (props) => {
  const navigate = useNavigate();
  const handleOnClick = (route) => navigate(route);

  return (
    <button onClick={() => handleOnClick(props.route)} className="box">
      <p className="titulo">{props.title}</p>
      <p className="numero">{props.number}</p>
    </button>
  );
};

export default Dados;
