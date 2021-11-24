import React from "react";
import "./UserRepos.css";
import Dados from "../Dados/Dados";
import { useContext } from "react";
import { context } from "../../context/Context";
import { Link } from "react-router-dom";

const UserRepos = () => {
  const ctx = useContext(context);
  return (
    <div className="repos-container">
      <Dados
        route="/repos"
        title="Repositories"
        number={ctx.userData?.public_repos}
      />
      <Link className="link" to={`/${ctx.userData.login}/starred`}>
        see most visited repositories {">"}
      </Link>
    </div>
  );
};

export default UserRepos;
