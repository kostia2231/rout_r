import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function UserProfile({ users }) {
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
