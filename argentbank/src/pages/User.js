import React from "react";
import InfoMoney from "../components/InfoMoney";
import { useSelector } from "react-redux";

const User = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.auth.userName);

  return (
    isLoggedIn && (
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userName} !
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <InfoMoney titleBank="" infoMoney="" infoBalance="" />
        <InfoMoney titleBank="" infoMoney="" infoBalance="" />
        <InfoMoney titleBank="" infoMoney="" infoBalance="" />
      </main>
    )
  );
};

export default User;
