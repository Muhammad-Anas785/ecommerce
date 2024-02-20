import React from "react";
import { PRODUCT_IMG } from "../utils/constant";

const ProductCard = (props) => {
  const { productData } = props;
  const { name, price, currency } = productData;
  const { mediaId } = productData.mediaList[0];
  return (
    <div className="product-card">
      <img src={PRODUCT_IMG + mediaId} alt="Not found" className="card-img" />
      <div className="card-content">
        <h6 className="product-name">{name}</h6>
        <h5 className="product-price">
          ${price || 100} {currency}{" "}
        </h5>
        {/* <button className="product-btn">Add to Cart</button> */}
      </div>
    </div>
  );
};
export default ProductCard;
