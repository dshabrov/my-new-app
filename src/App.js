import React, { useEffect, useState } from "react";
import "./App.css";

//"https://api.exchangeratesapi.io/latest?base=USD&symbols=RUB"

const fetchUtils = {
  get: async (url, params) => {
    try {
      const response = await fetch(url, params);
      if (response.status === 200) {
        return response.json();
      }
      throw Error("Could not retreive the data");
    } catch (err) {
      return {};
    }
  },
};

const RateItem = (rateData) => {
  return (
    <div className="rate-item">
      <span>{rateData.currency}</span>
      <span>{rateData.rate}</span>
    </div>
  );
};

const CurrenciesSelect = ({ currencies = [], value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      {currencies.map((currency, idx) => (
        <option key={idx} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

const getRates = (base, setData) => {};

function App() {
  const [data, setData] = useState({});
  const [base, setBase] = useState("USD");
  const [error, setError] = useState("");

  const onBaseChange = (event) => {
    const baseValue = event.target.value;
    setBase(baseValue.toUpperCase());
  };

  useEffect(() => {
    console.log("did mount 1");
  });

  useEffect(() => {
    if (base.length === 3) {
      fetchUtils
        .get(`https://api.exchangeratesapi.io/latest?base=${base}`) //&symbols=RUB
        .then((data) => {
          setData(data);
        });
    } else {
      setData({});
    }

    console.log("did mount 2");
  }, [base]);

  const rates = data.rates;
  const availableCurrensies = rates ? Object.keys(rates).sort() : [];

  console.log("RENDER");

  return (
    <div className="App">
      <div className="App-container">
        <header>Exchange Rates</header>
        <div className="filters-container">
          <label>Base Currency</label>
          {/* <input value={base} type="text" onChange={onBaseChange} />
          <input
            type="date"
            onChange={(event) => {
              console.log(event.target.value);
            }}
          /> */}
          <CurrenciesSelect
            currencies={availableCurrensies}
            value={base}
            onChange={onBaseChange}
          />
        </div>
        {rates ? (
          <div className="rates-container">
            {Object.keys(rates).map((currency, idx) => (
              <RateItem key={idx} currency={currency} rate={rates[currency]} />
            ))}
          </div>
        ) : (
          <div>No data to display</div>
        )}
      </div>
    </div>
  );
}

export default App;
