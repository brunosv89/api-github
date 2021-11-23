import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import UserContainer from "../../components/UserContainer/UserContainer";
import UserPicture from "../../components/UserPicture/UserPicture";
import UserDetails from "../../components/UserDetails/UserDetails";
import UserRepos from "../../components/repos/UserRepos";
import { useContext } from "react";
import { context } from "../../context/Context";

const Home = () => {
  const ctx = useContext(context);
  return (
    <main>
      <Header />
      <UserContainer>
        <UserPicture
          url={ctx.userData?.avatar_url}
          alternativeText="avatar image"
        />
        <UserDetails name={ctx.userData?.name} login={ctx.userData?.login} />
        <UserRepos />
      </UserContainer>
    </main>
  );
};

export default Home;
