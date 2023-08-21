import React from "react";
import Slider from "../components/home/Slider";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";

function Home() {
  return (
    <div>
      <Slider></Slider>
      <Sorting></Sorting>
      <div className="flex">
        <Category></Category>
        <Products></Products>
      </div>
    </div>
  );
}

export default Home;
