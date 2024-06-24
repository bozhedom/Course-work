import React from 'react';

import MyFooter from '../components/MyFooter';

export default function About() {
  return (
    <div className="page-container-about">
      <div className="content-wrap">
        <h1>About Us</h1>
        <p>This is the about page of our demo application.</p>
      </div>

      <MyFooter />
    </div>
  );
}
