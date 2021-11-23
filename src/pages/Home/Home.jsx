import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import UserContainer from "../../components/UserContainer/UserContainer";
import UserPicture from "../../components/UserPicture/UserPicture";
import UserDetails from "../../components/UserDetails/UserDetails";
import UserRepos from "../../components/repos/UserRepos";

const Home = () => {
  return (
    <main>
      <Header />
      <UserContainer>
        <UserPicture
          url="https://avatars.githubusercontent.com/u/66140511?v=4"
          alternativeText="image"
        />
        <UserDetails name="name" login="username" />
        <UserRepos />
      </UserContainer>
    </main>
  );
};

export default Home;
