import React from "react";
import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const userName = useSelector((state) => state.auth.userName);
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleGoToUser = () => {
    if (isLoggedIn === true) navigate("/User");
  };

  return (
    <nav className="main-nav">
      <Logo />

      <div className="profile-container">
        <p>{userName}</p>
        <i onClick={handleGoToUser} className="fa fa-user-circle"></i>
        <NavLink
          to="/Sign-in"
          className="main-nav-item"
          href="./sign-in.html"
          onClick={isLoggedIn ? handleLogout : null}
        >
          {isLoggedIn ? "Sign Out" : "Sign In"}
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
