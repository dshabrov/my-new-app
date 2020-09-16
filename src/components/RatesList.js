import React from "react";

const RateItem = ({ currency, rate }) => {
  return (
    <div className="rate-item">
      <span>{currency}</span>
      <span>{rate}</span>
    </div>
  );
};

const RatesList = ({ rates }) => {
  if (rates.length === 0) {
    return <div>No data to display</div>;
  }
  return (
    <div className="rates-container">
      {rates.map((rate, idx) => (
        <RateItem key={idx} {...rate} />
      ))}
    </div>
  );
};

export default RatesList;
