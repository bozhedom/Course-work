import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Gallery Page 1</Link>
          </li>
          <li>
            <Link to="/lazy-page1">Lazy Gallery Page 1</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
