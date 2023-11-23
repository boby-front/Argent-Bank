import React, { useState } from "react";
import InfoMoney from "../components/InfoMoney";
import { useDispatch, useSelector } from "react-redux";
import { userInfos } from "../store/slices/authSlice";
import { updateUserInDatabase } from "../store/actions/dataActions";

const User = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.auth.userName);
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const [newUserName, setNewUserName] = useState("");
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);

  const ToggleEdit = () => {
    setOpenEdit(!openEdit);
  };

  const handleUserNameChange = () => {
    dispatch(userInfos({ userName: newUserName, firstName, lastName }));
    updateUserInDatabase(newUserName);
    setOpenEdit(false);
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
                <input
                  type="text"
                  id="username"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="firstname">First name :</label>
                <input
                  type="text"
                  id="firstname"
                  value={firstName}
                  readonly
                  className="unactif-input "
                />
              </div>
              <div className="input-container">
                <label htmlFor="lastname">Last name :</label>
                <input
                  type="text"
                  id="lastname"
                  value={lastName}
                  readonly
                  className="unactif-input "
                />
              </div>
            </div>
            <div className="edit-button-container">
              <button className="edit-button" onClick={handleUserNameChange}>
                Save
              </button>
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
