import React, { useContext, useState } from "react";
import Btn from "../Btn/Btn";
import "./Form.css";
import client from "../../services/client";
import { context } from "../../context/Context";

const Form = () => {
  const [busca, setBusca] = useState("");
  const ctx = useContext(context);

  async function getUserData() {
    try {
      const response = await client.get(`/${busca}`);
      const repositories = await client.get(`/${busca}/repos`);
      ctx.setUserData(response.data);
      ctx.setRepos(repositories.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="form-container">
      <input
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
        className="input"
        type="text"
        placeholder="username"
      />
      <Btn onClick={getUserData}> Search </Btn>
    </div>
  );
};

export default Form;
