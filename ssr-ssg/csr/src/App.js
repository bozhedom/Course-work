import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Csr from './Csr';

import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <ul className="nav-links">
          <li className='item-link'>
            <Link to="/csr" className='link'>Client-Side Rendering</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/csr" element={<Csr />} />]
        </Routes>
      </div>
    </Router>
  );
}

export default App;
