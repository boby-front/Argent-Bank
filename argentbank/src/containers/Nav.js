import React from "react";
import Logo from "../components/Logo";

const Nav = () => {
  return (
    <nav className="main-nav">
      <Logo />
      <div>
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Nav;
