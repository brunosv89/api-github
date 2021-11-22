import React from "react";
import "./UserContainer.css";

const UserContainer = (props) => {
  return <div className="user-container"> {props.children}</div>;
};
export default UserContainer;
