import React from "react";
import Btn from "../Btn/Btn";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <input className="input" type="text" placeholder="username" />
      <Btn> Search </Btn>
    </div>
  );
};

export default Form;
