import React, { useState } from "react";
import "./App.css";
import { RatesList, CurrenciesSelect } from "./components";
import useExchangeRateApi from "./hooks/useExchangeRateApi";

function App() {
  const {
    baseCurrency,
    rates,
    currencies,
    onBaseCurrencyChange,
  } = useExchangeRateApi();

  const [filter, setFilter] = useState("");
  const onFilterChange = (event) => {
    setFilter(event.target.value.toUpperCase());
  };
  const filteredRates = rates.filter(
    (rate) => rate.currency.indexOf(filter) !== -1
  );

  return (
    <div className="App">
      <div className="App-container">
        <header>Exchange Rates</header>
        <div className="filters-container">
          <label>Base Currency</label>
          <CurrenciesSelect
            currencies={currencies}
            value={baseCurrency}
            onChange={onBaseCurrencyChange}
          />
          <label>Filter</label>
          <input
            className="input-control filter-input"
            type="text"
            value={filter}
            onChange={onFilterChange}
          />
        </div>
        <RatesList rates={filteredRates} />
      </div>
    </div>
  );
}

export default App;
