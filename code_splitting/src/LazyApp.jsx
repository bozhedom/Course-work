import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const LazyHeavyComponent1 = lazy(() => import('./components/HeavyComponent1'));
const LazyHeavyComponent2 = lazy(() => import('./components/HeavyComponent2'));
const LazyHeavyComponent3 = lazy(() => import('./components/HeavyComponent3'));

function LazyApp() {
  return (
    <Router>
      <div className="App">
        <nav >
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
          <Route
            path="/page1"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyHeavyComponent1 />
              </Suspense>
            }
          />
          <Route
            path="/page2"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyHeavyComponent2 />
              </Suspense>
            }
          />
          <Route
            path="/page3"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyHeavyComponent3 />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default LazyApp;
