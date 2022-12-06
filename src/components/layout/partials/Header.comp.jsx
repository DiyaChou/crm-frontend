import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/brand/logo.jpg";

const Header = () => {
  return (
    <nav>
      <div className="header__logo_container">
        <img className="header__logo" src={logo} alt="logo" />
      </div>
      <ul className="header__nav__unordered_list">
        <Link to="/dashboard" className="header__nav__list_item">
          Dashboard
        </Link>
        <Link to="/Tickets" className="header__nav__list_item">
          Tickets
        </Link>
        <Link to="/Logout" className="header__nav__list_item">
          Logout
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
