import React from "react";
import Header from "./components/Header";
import "../index.css";
import Body from "./components/Body";
import ProductDetails from "./components/ProductDetails";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-body">
      <Header />
      <Outlet />
      
    </div>
  );
};
export default App;
