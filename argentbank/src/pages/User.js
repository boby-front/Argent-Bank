import React, { useState } from "react";
import InfoMoney from "../components/InfoMoney";
import { useSelector } from "react-redux";

const User = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.auth.userName);
  const [openEdit, setOpenEdit] = useState(false);

  const ToggleEdit = () => {
    setOpenEdit(!openEdit);
  };

  return (
    isLoggedIn && (
      <main className="main bg-dark">
        {openEdit && (
          <div className="edit-container">
            <h1>Edit user info</h1>
            <div className="edit-inputs-container">
              <div className="input-container">
                <label htmlFor="username">User name :</label>
                <input type="text" id="username" />
              </div>
              <div className="input-container">
                <label htmlFor="firstname">First name :</label>
                <input type="text" id="firstname" />
              </div>
              <div className="input-container">
                <label htmlFor="lastname">Last name :</label>
                <input type="text" id="lastname" />
              </div>
            </div>
            <div className="edit-button-container">
              <button className="edit-button">Save</button>
              <button onClick={ToggleEdit} className="edit-button">
                Cancel
              </button>
            </div>
          </div>
        )}

        {!openEdit && (
          <div className="header">
            <h1>
              Welcome back
              <br />
              {userName} !
            </h1>
            <button className="edit-button" onClick={ToggleEdit}>
              Edit Name
            </button>
          </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        <InfoMoney
          titleBankInfo="Argent Bank Checking (x3448)"
          infoMoney="$48,098.43"
          infoBalance="Available Balance"
        />
        <InfoMoney
          titleBankInfo="Argent Bank Checking (x3448)"
          infoMoney="$48,098.43"
          infoBalance="Available Balance"
        />
        <InfoMoney
          titleBankInfo="Argent Bank Checking (x3448)"
          infoMoney="$48,098.43"
          infoBalance="Available Balance"
        />
      </main>
    )
  );
};

export default User;
