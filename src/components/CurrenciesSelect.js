import React from "react";

const CurrenciesSelect = ({ currencies = [], value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="input-control">
      {currencies.map((currency, idx) => (
        <option key={idx} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrenciesSelect;
