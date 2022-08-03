import React, { Fragment } from "react";
import styles from "./Header.module.css";
import bg from "../../img/bg.jpg";

const Header = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logo}>Transfer Market</div>
          <ul className={styles["nav-list"]}>
            <li>Squad</li>
            <li>Purchase</li>
            <li>Sale</li>
            <li><a href="#" className={styles.cart}>Cart</a></li>
          </ul>
        </nav>
        <header className={styles.header}>
          <img src={bg} alt="back"></img>
        </header>
      </div>
    </Fragment>
  );
};

export default Header;
