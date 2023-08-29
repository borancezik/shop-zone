import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts.length > 0 ? (
        <div className="flex flex-col gap-y-4">
          {carts.map((cart, index) => (
            <CartComp cart={cart}></CartComp>
          ))}
          <div className="flex flex-col items-end gap-y-4">
            <div className="font-bold text-2xl">
              Toplam Fiyat : {totalAmount}
            </div>
            <div className="bg-green-500 text-white text-2xl cursor-pointer rounded-md w-[200px] h-16 flex items-center justify-center">
              Siparişi Tamamla
            </div>
          </div>
        </div>
      ) : (
        <div>Sepetiniz boş</div>
      )}
    </div>
  );
};

export default Cart;
