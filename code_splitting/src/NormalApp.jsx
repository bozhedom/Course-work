import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HeavyComponent1 from './components/HeavyComponent1';
import HeavyComponent2 from './components/HeavyComponent2';
import HeavyComponent3 from './components/HeavyComponent3';

function NormalApp() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/page1">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
            <li>
              <Link to="/page3">Page 3</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/page1" element={<HeavyComponent1 />} />
          <Route path="/page2" element={<HeavyComponent2 />} />
          <Route path="/page3" element={<HeavyComponent3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NormalApp;
