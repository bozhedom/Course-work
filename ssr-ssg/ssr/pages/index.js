// pages/index.js
import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <div className='container'>
      <h1>Next.js SSR and SSG Demo</h1>
      <nav>
        <ul>
          <li>
            <Link href="/ssr">Server-Side Rendering</Link>
          </li>
          <li>
            <Link href="/ssg">Static Site Generation</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
