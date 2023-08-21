import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = () => {
  const dispacth = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  console.log("categories", categories);

  useEffect(() => {
    dispacth(getCategories());
  }, [dispacth]);
  return (
    <div className="w-1/6 bg-gray-100">
      <div>KATEGORİ</div>
      {categories &&
        categories?.map((category, index) => <div key={index}>{category}</div>)}
    </div>
  );
};

export default Category;
