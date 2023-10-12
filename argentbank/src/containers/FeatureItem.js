import React from "react";

const FeatureItem = ({ imgUrl, alt, title, text }) => {
  return (
    <div className="feature-item">
      <img src={imgUrl} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeatureItem;
