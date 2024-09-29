import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#operador-p2p">Operador P2P</a></li>
        <li><a href="#plataforma-p2p">Plataforma P2P</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
