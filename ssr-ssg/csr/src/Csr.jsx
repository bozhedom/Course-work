import React, { useState, useEffect } from 'react';

function GalleryPage1() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h1 className="title">Client-Side Rendering</h1>
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

export default GalleryPage1;
