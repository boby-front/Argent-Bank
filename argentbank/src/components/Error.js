import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-message">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/home">Retourner sur la page d'accueil</NavLink>
      </div>
    </div>
  );
};

export default Error;
