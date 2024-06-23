import React, { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul
        style={{
          listStyleType: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {users.map((user) => (
          <li
            style={{
              border: '1px solid blue',
              padding: '20px',
              borderRadius: '30px',
            }}
            key={user.id}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
