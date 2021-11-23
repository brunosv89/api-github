import React from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  return (
    <div className="details-container">
      <h2 className="name">{props?.name}</h2>
      <h3 className="username">/{props?.login}</h3>
    </div>
  );
};

export default UserDetails;
