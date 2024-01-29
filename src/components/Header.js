import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <a className="logo" href="#">
          Catering Escolar<span>.</span>
        </a>
        <ul className="menu-links">
          <span id="close-menu-btn" className="material-symbols-outlined">
            close
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Casos de Éxito</a>
          </li>
          <li>
            <a href="#">Nuestra Empresa</a>
          </li>
          <li>
            <a href="#">Contactenos</a>
          </li>
        </ul>
        <span id="hamburger-btn" className="material-symbols-outlined">
          menu
        </span>
      </nav>
    </header>
  );
};

export default Header;
