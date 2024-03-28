import { useState, useEffect } from "react";
import "./index.css";

const CryptoPrice = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      const jsonData = await response.json();
      setCryptoData(jsonData.bpi);

      console.log(jsonData.bpi.EUR);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="crypto-title">Cryptocurrency Prices</h1>

      <div className="crypto-container">
        {Object.entries(cryptoData).map(([currency, rate]) => (
          <div className="cardStyles" key={currency}>
            <div className="titleStyles">
              {currency.toUpperCase()}
              <span className="priceStyles">
                {parseFloat(rate.rate_float).toFixed(2)}
              </span>
            </div>
            <div className="priceStyles">
              {rate.symbol} ({rate.rate_float * 100}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoPrice;
