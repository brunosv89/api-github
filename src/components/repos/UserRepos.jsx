import React from "react";
import "./UserRepos.css";
import Dados from "../Dados/Dados";

const UserRepos = () => {
  return (
    <div className="repos-container">
      <Dados route="/repos" title="Repositories" number="12" />
      <Dados route="/starred" title="Starred" number="6" />
    </div>
  );
};

export default UserRepos;
