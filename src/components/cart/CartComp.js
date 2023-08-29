import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between my-10">
      <div className="font-bold text-2xl">{cart?.quantity} x </div>
      <img className="w-[150px] h-[150px] object-cover" src={cart?.image}></img>
      <div className="w-[50%] flex flex-col gap-y-2">
        <div className="font-bold text-2xl">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-2xl">{cart?.price} TL</div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white text-2xl cursor-pointer rounded-md w-[150px] h-16 flex items-center justify-center"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
