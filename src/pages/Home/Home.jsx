import React from "react";
import Form from "../../components/Form/Form";
import "./Home.css";
import UserContainer from "../../components/UserContainer/UserContainer";
import UserPicture from "../../components/UserPicture/UserPicture";

const Home = () => {
  return (
    <main>
      <h1 className="title"> Welcome to GitHub Search! </h1>
      <Form />
      <UserContainer>
        <UserPicture
          url="https://avatars.githubusercontent.com/u/66140511?v=4"
          alternativeText="image"
        />
      </UserContainer>
    </main>
  );
};

export default Home;
