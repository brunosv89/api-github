import React from "react";
import "./UserPicture.css";

const UserPicture = (props) => {
  return (
    <img
      className="user-picture"
      src={props?.url}
      alt={props?.alternativeText}
    />
  );
};

export default UserPicture;
