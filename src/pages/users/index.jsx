import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

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

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      age: PropTypes.number.isRequired,
      role: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};