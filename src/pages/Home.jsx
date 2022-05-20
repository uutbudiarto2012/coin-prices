import React from "react";
import Charts from "../components/Charts";
import Navbar from "../components/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="page">
      <Navbar />
      <Charts />
    </div>
  );
};

export default Home;
