import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import React {Outlet} from 'react';
import Header from "./Header";

const HomePage = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === null && username === "") {
      Navigate("/");
    }
  }, []);
  return (
    <>
      <Header />
      <h1>data</h1>
    </>
  );
};

export default HomePage;
