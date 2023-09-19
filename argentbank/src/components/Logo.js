import React from "react";
import logo from "../designs/img/argentBankLogo.png";

const Logo = () => {
  return (
    <a className="main-nav-logo">
      <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </a>
  );
};

export default Logo;
