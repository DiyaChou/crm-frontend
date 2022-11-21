import React from "react";
import logo from "../../../assets/brand/logo.jpg";

const Header = () => {
  return (
    <nav>
      <a href="#" className="header__logo_container">
        <img className="header__logo" src={logo} alt="logo" />
      </a>
      <ul className="header__nav__unordered_list">
        <a href="#" className="header__nav__list_item">
          Home
        </a>
        <a href="#" className="header__nav__list_item">
          Dashboard
        </a>
      </ul>
    </nav>
  );
};

export default Header;
