import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Users({ users }) {
  return (
    <div className={styles.usersWrapper}>
      <h1>USERS</h1>
      <ul>
        {users.map(({ id, firstName, lastName }) => (
          <li key={id}>
            <Link to={`/users/${id}/${firstName} ${lastName}`}>
              {firstName} {lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
