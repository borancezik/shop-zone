import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";
import { useHomePageContext } from "../../context/HomePageProvider";

const Category = () => {
  const dispacth = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const { setCategory } = useHomePageContext();

  useEffect(() => {
    dispacth(getCategories());
  }, [dispacth]);
  return (
    <div className="w-1/6 bg-gray-100 max-h-screen">
      <div className="border-b pb-1 px-2 text-xl font-bold">KATEGORİ</div>
      {categories &&
        categories?.map((category, index) => (
          <div
            onClick={() => setCategory(category)}
            className="text-lg mt-1 cursor-pointer hover:bg-gray-200 p-2"
            key={index}
          >
            {category}
          </div>
        ))}
    </div>
  );
};

export default Category;
