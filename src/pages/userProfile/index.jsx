import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

export default function UserProfile({ users }) {
  console.log("Rendering UsersProfile component");

  const { userId, username } = useParams();
  const user = users.find((user) => user.id === parseInt(userId));
  if (!user) {
    return <p>User not found or loading.</p>;
  }

  return (
    <>
      <div className={styles.userNameWrapper}>
        <Link className={styles.backBtn} to="/users">
          Back
        </Link>
        <h1>{username}</h1>
        <p>Id: {userId}</p>
        <p>Age: {user.age}</p>
        <p>Role: {user.role}</p>
        <p>Email: {user.email}</p>
      </div>
    </>
  );
}

UserProfile.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      age: PropTypes.number.isRequired,
      role: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};
