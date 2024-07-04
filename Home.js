import React from "react";
import RecentStudies from "./RecentStudies";
import UploadFile from "./UploadFile";
import ToDoList from "./ToDoList";

const Home = () => {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <RecentStudies />
      <UploadFile />
      <ToDoList />
    </div>
  );
};

export default Home;
