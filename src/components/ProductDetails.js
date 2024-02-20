import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_CARD_DETAILS, CARD_DETAILS_IMG } from "../utils/constant";
import DetailsShimmer from "./DetailsShimmer";

const ProductDetails = () => {
  const [content, setContent] = useState(null);
  const { proUrn } = useParams();
  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const data = await fetch(API_CARD_DETAILS + proUrn);
    const json = await data.json();
    setContent(json?.data?.enquiryInformationGuest?.metadata?.itemInfo);
  };

  if (content === null) {
    return <DetailsShimmer />;
  }
  const {
    itemName,
    itemCoverPhotoMediaId,
    serviceDescription,
    productModelNumber,
    productSize,
  } = content;

  return (
    <>
      <div className="product-details-container">
        <div className="product-image-container">
          <img
            src={CARD_DETAILS_IMG + itemCoverPhotoMediaId}
            alt="no found"
            className="pic-product"
          />
        </div>
        <div className="product-details">
          <h1>{itemName}</h1>
          <hr />
          <div className="details-container">
            <h3 className="name">Model:{productModelNumber} </h3>
            <h3 className="name">Size: {productSize}</h3>
            <h3 className="name">Description</h3>
            <p className="service-description">{serviceDescription}</p>
          </div>
          <button className="product-btn">Add to Cart</button>
        </div>
      </div>
      <div className="description-content">
        <p>
          Features:
          <br />
          &bull; Classic rectangular contour with curved edges.
          <br />
          &bull; Come with subtle grid patterns on its body.
          <br />
          &bull; Engaged with a tiny LED display screen in the front for showing
          battery capacity.
          <br />
          &bull; With a flashlight illumination function.
          <br />
          &bull; Suitable for most mobile devices on the market.
          <br />
          &bull; Contemporary feel and look.
          <br />
          &bull; Amazing choice for charging electronic units when on outings
          without a power outlet.
          <br />
          &bull; Capacity: 30000mAh.
          <br />
          &bull; Battery type: lithium-ion.
          <br />
        </p>
      </div>
    </>
  );
};
export default ProductDetails;
