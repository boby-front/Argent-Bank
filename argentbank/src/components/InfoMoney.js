import React from "react";

const InfoMoney = ({ titleBankInfo, infoMoney, infoBalance }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{titleBankInfo}</h3>
        <p className="account-amount">{infoMoney}</p>
        <p className="account-amount-description">{infoBalance}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default InfoMoney;
