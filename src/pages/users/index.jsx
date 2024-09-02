import { Link } from "react-router-dom";
import React from "react";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
];

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link to={`/user/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Users;
