import React, { useEffect, useState } from "react";
import Slider from "../components/home/Slider";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import HomePageProvider from "../context/HomePageProvider";
import ProductDetailComp from "../components/details/ProductDetailComp";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/productSlice";

function ProductDetail() {
  const params = useParams();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getDetailProduct(params?.id));
  }, [dispacth]);
  const { productDetails, productDetailStatus } = useSelector(
    (state) => state.products
  );
  console.log("pages", productDetails);
  return (
    <div>
      {productDetailStatus === "SUCCESS" && (
        <ProductDetailComp productDetails={productDetails} />
      )}
    </div>
  );
}

export default ProductDetail;
