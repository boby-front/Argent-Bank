import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const SignInContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/User");
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  return (
    <main className="main bg-dark main-height">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>{" "}
            <input
              type="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>{" "}
          </div>
          <button className="sign-in-button" onClick={handleLogin}>
            Sign In
          </button>
          {error ? <div className="error-message">{error}</div> : null}
        </form>
      </section>
    </main>
  );
};

export default SignInContent;
