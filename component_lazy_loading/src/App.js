import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import GalleryPage1 from './components/GalleryPage1';
import LazyGalleryPage1 from './components/LazyGalleryPage1';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/page1" element={<GalleryPage1 />} />
            <Route path="/lazy-page1" element={<LazyGalleryPage1 />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
