import React from "react";
import Header from "../../components/Header/Header";
import ReposList from "../../components/reposList/ReposList";
import UserContainer from "../../components/UserContainer/UserContainer";
import { useContext } from "react";
import { context } from "../../context/Context";

const Repos = () => {
  const ctx = useContext(context);
  return (
    <main>
      <Header />
      <UserContainer>
        <ReposList name={ctx.userData.name} repos={ctx.repos} />
      </UserContainer>
    </main>
  );
};

export default Repos;
