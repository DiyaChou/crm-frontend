import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../../api/userApi";
import logo from "../../../assets/brand/logo.jpg";

const Header = () => {
  const navigate = useNavigate();
  const logMeOut = async () => {
    await userLogout();
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("crmSite");
    // navigate("/");
  };
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
        <a href="/" className="header__nav__list_item" onClick={logMeOut}>
          Logout
        </a>
      </ul>
    </nav>
  );
};

export default Header;
