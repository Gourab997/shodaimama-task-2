import React from "react";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import TopBanner from "../TopBanner/TopBanner";
import Why from "../Why/Why";
import "./HomeContain.css";

const HomeContain = () => {
  return (
    <div>
      <div >
        <TopBanner></TopBanner>

        <Products></Products>
        <Categories></Categories>
        <Why></Why>
      </div>
    </div>
  );
};

export default HomeContain;
