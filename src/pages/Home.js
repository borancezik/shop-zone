import React, { useState } from "react";
import Slider from "../components/home/Slider";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import HomePageProvider from "../context/HomePageProvider";

function Home() {
  return (
    <HomePageProvider>
      <div>
        <Slider></Slider>
        <Sorting></Sorting>
        <div className="flex">
          <Category></Category>
          <Products></Products>
        </div>
      </div>
    </HomePageProvider>
  );
}

export default Home;
