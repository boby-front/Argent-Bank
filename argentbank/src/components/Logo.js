import React from "react";
import logo from "../designs/img/argentBankLogo_1.webp";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/Home" className="main-nav-logo">
      <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
    </NavLink>
  );
};

export default Logo;
