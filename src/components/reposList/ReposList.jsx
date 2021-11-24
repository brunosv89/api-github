import React from "react";

const ReposList = (props) => {
  return (
    <main>
      <h1> {props.name?.split(" ")[0]} repositories </h1>

      <div>
        {props.repos?.map((repo) => (
          <p>{repo?.name}</p>
        ))}
      </div>
    </main>
  );
};

export default ReposList;
