import React from "react";
import { Link } from "react-router-dom";
import styles from "./syles.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbarWrapper}>
        <ul className={styles.navbar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
