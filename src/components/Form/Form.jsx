import React from "react";
import Btn from "../Btn/Btn";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <label className="label"> Username: </label>
      <input className="input" type="text" />
      <Btn> Search </Btn>
    </div>
  );
};

export default Form;
