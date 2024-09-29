import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  // Función que cambia la sección activa
  const handleClick = (section: string) => {
    setActiveSection(section);  // Cambia el estado de la sección activa
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="../../public/logo.png" alt="Kipu Kambio Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a
              href="#inicio"
              className={activeSection === 'inicio' ? 'active' : ''}
              onClick={() => handleClick('inicio')}  
            >
              INICIO
            </a>
            {activeSection === 'inicio' && <div className="underline"></div>}
          </li>
          <li>
            <a
              href="#operador"
              className={activeSection === 'operador' ? 'active' : ''}
              onClick={() => handleClick('operador')} 
            >
              OPERADOR P2P
            </a>
            {activeSection === 'operador' && <div className="underline"></div>}
          </li>
          <li>
            <a
              href="#plataforma"
              className={activeSection === 'plataforma' ? 'active' : ''}
              onClick={() => handleClick('plataforma')} 
            >
              PLATAFORMA P2P
            </a>
            {activeSection === 'plataforma' && <div className="underline"></div>}
          </li>
        </ul>
      </nav>
      <button className="wallet-button">Conectar Wallet</button>
    </header>
  );
};

export default Header;
