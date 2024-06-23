import React from 'react';
import MyFooter from '../components/MyFooter';
import ReactCounter from '../components/ReactCounter';
import UserList from '../components/UserList';

export default function Home() {
  return (
    <div className="page-container">
      <div className="greedy">
        <h1>Welcome to Astro</h1>
        <p>This is the homepage of my demo application.</p>
      </div>

      <div className="static">
        <h2>Static Content</h2>
        <p>This content is rendered statically.</p>
      </div>

      <div className="counter">
        <h2>Interactive React Component</h2>
        <ReactCounter />
      </div>

      <div className="api">
        <h2>Data Fetching Component</h2>
        <UserList />
      </div>
      <MyFooter />
    </div>
  );
}
