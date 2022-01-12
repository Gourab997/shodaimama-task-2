import React from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Products from "../Products/Products";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <Products></Products>
    </div>
  );
};

export default Home;
