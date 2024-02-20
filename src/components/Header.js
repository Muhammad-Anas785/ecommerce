import React from "react";
import Logo from "../../Images/logo2.png";
import MenuBar from "../../Images/menu.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="not found" className="cart-logo" />
      </div>

      <div className="links-container">
        <ul className="nav-links">
          <li>
            <Link to="/" className="link-tab">Home</Link>
          </li>
          <li>
            <Link to="/about" className="link-tab">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="link-tab">Contact Us</Link>
          </li>
          <li>
            <Link to="/career" className="link-tab">Careers</Link>
          </li>

          <li>Careers</li>
        </ul>
      </div>

      <div className="cart-container">
        <button className="cart-btn">Cart</button>
      </div>
      <div className="menu-bar">
        <img src={MenuBar} className="menu-icon" alt="" />
      </div>
    </div>
  );
};
export default Header;
