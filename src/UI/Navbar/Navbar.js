import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Image from "react-bootstrap/Image";
import coronaImage from "../../assets/images/image.png";

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div>
        <Image src={coronaImage} fluid />
      </div>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tracker" activeClassName={styles.active}>
            Tracker
          </NavLink>
        </li>
        <li>
          <NavLink to="/review" activeClassName={styles.active}>
            Review
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
