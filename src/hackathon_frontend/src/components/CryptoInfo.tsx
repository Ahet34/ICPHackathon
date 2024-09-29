import React from 'react';
import '../styles/CryptoInfo.css';

const CryptoInfo = () => {
  return (
    <div className="crypto-info-container">
      <div className="fixed-text">
        AHORA <span className="separator">|</span>
      </div>
      <div className="crypto-info">
        <span>
          Bitcoin (BTC): $27,650 |
          Ethereum (ETH): $1,705 |
          Ripple (XRP): $0.53 |
          Polkadot (DOT): $4.82 |
          Litecoin (LTC): $85.60 |
          Avalanche (AVAX): $10.25 |
          Dogecoin (DOGE): $0.062 |
          Chainlink (LINK): $7.65
        </span>
      </div>
    </div>
  );
};

export default CryptoInfo;
