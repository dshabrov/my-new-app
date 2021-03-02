import { useEffect, useState } from "react";
import { fetchUtils } from "../utils";

const API_URL = "https://api.exchangeratesapi.io/";

const useExchangeRateApi = () => {
  const [baseCurrency, setbaseCurrency] = useState("PLN");
  const [currencies, setCurrencies] = useState(["PLN"]);
  const [rates, setRates] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);

    fetchUtils
      .get(`${API_URL}latest?base=${baseCurrency}`) //&symbols=RUB,USD,EUR,PLN
      .then((data) => {
        setIsFetching(false);
    
        if (data.rates) {
          const rates = Object.keys(data.rates).map((currKey) => ({
            currency: currKey,
            rate: data.rates[currKey],
          }));
    
          setRates(rates);
          setCurrencies(rates.map((rate) => rate.currency));
        }
      })
      .catch(() => {
        setIsFetching(false);
      });
  }, [baseCurrency]);

  const onBaseCurrencyChange = (event) => {
    const baseValue = event.target.value;
    setbaseCurrency(baseValue.toUpperCase());
  };

  return {
    onBaseCurrencyChange,
    baseCurrency,
    currencies,
    rates,
    isFetching,
  };
};

export default useExchangeRateApi;
