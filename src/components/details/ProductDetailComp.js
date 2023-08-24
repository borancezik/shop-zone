import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductDetailComp = ({ productDetails }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const addBasket = () => {
    dispatch(addToCart({ ...productDetails, quantity: quantity }));
  };

  return (
    <div className="flex flex-row w-full h-full items-start justify-between">
      <img
        className="w-[700px] h-[700px] object-cover"
        src={productDetails.image}
      ></img>
      <div className="w-[full] h-full flex flex-col items-start justify-start p-4 gap-y-4">
        <div className="text-4xl font-bold">{productDetails?.title}</div>
        <div className="my-2 text-xl">{productDetails?.description}</div>
        <div className="text-xl text-red-600">
          Raiting : {productDetails?.rating?.rate}
        </div>
        <div className="text-red-600">
          Count : {productDetails?.rating?.count}
        </div>
        <div className="text-5xl font-bold">
          {productDetails?.price}
          <span className="text-sm"> TL</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-6">
          <div
            className="text-3xl font-bold cursor-pointer"
            onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
          >
            -
          </div>
          <div>{quantity}</div>
          <div
            className="text-3xl font-bold cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </div>
        </div>
        <button
          onClick={() => addBasket()}
          className="w-40 h-12 bg-gray-300 hover:bg-gray-500"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ProductDetailComp;
