import React from "react";

const ProductDetailComp = ({ productDetails }) => {
  console.log("productDetails", productDetails);
  return (
    <div className="flex">
      <div>{productDetails.title}</div>
      <div>DENEME</div>
    </div>
  );
};

export default ProductDetailComp;
