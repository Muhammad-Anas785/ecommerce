import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CARDS_API } from "../utils/constant";

const Body = () => {
  const [productList, setProductList] = useState([]);
  const [copyList, setCopyList] = useState([]);
  const [searchText, setSearctText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARDS_API);
    const json = await data.json();
    setProductList(json?.data?.productDiscovery?.product);
    setCopyList(json?.data?.productDiscovery?.product);
  };

  const filterProducts = () => {
    const filteredCards = productList.filter((item) => {
      return item.productInfo.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setCopyList(filteredCards);
  };

  return productList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Product.."
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearctText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={filterProducts}>
          Search
        </button>
      </div>

      <div className="card-container">
        {copyList.map((value) => {
          console.log(value.productInfo.urn);
          return (
            <Link
              to={"/product/" + value.productInfo.urn}
              key={value.productInfo.id}
              className="link-cards"
            >
              <ProductCard productData={value.productInfo} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
