import React, { useState } from 'react';
import '../styles/ExchangeRates.css';

interface Rate {
    currency: string;
    buy: number;
    sell: number;
}

interface ExchangeRates {
    [exchange: string]: {
        [country: string]: Rate[];
    };
}

const ExchangeRates = () => {
    const [selectedCountry, setSelectedCountry] = useState('Bolivia');
    const [selectedExchange, setSelectedExchange] = useState('Binance');

    const rates: ExchangeRates = {
        Binance: {
            Bolivia: [
                { currency: 'Dólar Blue', buy: 10.48, sell: 10.75 },
                { currency: 'USDT', buy: 10.4, sell: 11.0 },
            ],
            Venezuela: [
                { currency: 'Dólar Blue', buy: 8.50, sell: 8.75 },
                { currency: 'USDT', buy: 8.2, sell: 8.8 },
            ],
            Argentina: [
                { currency: 'Dólar Blue', buy: 7.25, sell: 7.5 },
                { currency: 'USDT', buy: 7.1, sell: 7.6 },
            ],
        },
        Bitget: {
            Bolivia: [
                { currency: 'Dólar Blue', buy: 10.45, sell: 10.7 },
                { currency: 'USDT', buy: 10.35, sell: 10.95 },
            ],
            Venezuela: [
                { currency: 'Dólar Blue', buy: 8.45, sell: 8.7 },
                { currency: 'USDT', buy: 8.1, sell: 8.7 },
            ],
            Argentina: [
                { currency: 'Dólar Blue', buy: 7.2, sell: 7.45 },
                { currency: 'USDT', buy: 7.0, sell: 7.5 },
            ],
        },
    };

    const handleCountryChange = (country: string) => {
        setSelectedCountry(country);
    };

    const handleExchangeChange = (exchange: string) => {
        setSelectedExchange(exchange);
    };

    return (
        <div className="exchange-container">
            <div className="exchange-buttons">
                <button 
                    className={`binance ${selectedExchange === 'Binance' ? 'active' : ''}`}
                    onClick={() => handleExchangeChange('Binance')}
                >
                    BINANCE
                </button>
                <button 
                    className={`bitget ${selectedExchange === 'Bitget' ? 'active' : ''}`}
                    onClick={() => handleExchangeChange('Bitget')}
                >
                    BITGET
                </button>
            </div>
            <div className="exchange-rates">
                <div className="country-selector">
                    <select 
                        value={selectedCountry}
                        onChange={(e) => handleCountryChange(e.target.value)}
                    >
                        <option value="Bolivia">Bolivia</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Argentina">Argentina</option>
                    </select>
                </div>
                <div className="rates">
                    {rates[selectedExchange][selectedCountry].map((rate: Rate, index: number) => (
                        <div className="rate" key={index}>
                            <span className="currency">{rate.currency}</span>
                            <span className="buy">Compra: ${rate.buy.toFixed(2)}</span>
                            <span className="sell">Venta: ${rate.sell.toFixed(2)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExchangeRates;
