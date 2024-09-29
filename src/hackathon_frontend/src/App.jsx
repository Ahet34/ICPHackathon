import React from 'react';
import Header from './components/Header';
import CryptoInfo from './components/CryptoInfo';
import ExchangeRates from './components/ExchangeRates';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CryptoInfo />
      <ExchangeRates />
    </div>
  );
}

export default App;
