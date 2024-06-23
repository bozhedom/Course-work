import React from 'react';
import Link from 'next/link';

function SSG({ comments }) {
  return (
    <div className="container_ssr">
      <div className="ssr">
        <h2>
          <Link href="/">Back</Link>
        </h2>
        <h1>Static Site Generation</h1>
      </div>
      <ul className="user-list">
        {comments.map((comment) => (
          <li key={comment.id} className="user-card">
            <div className="user-name">{comment.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await res.json();

  return {
    props: {
      comments,
    },
  };
}

export default SSG;
