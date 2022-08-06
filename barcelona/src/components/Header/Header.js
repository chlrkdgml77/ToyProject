import React, { Fragment } from "react";
import styles from "./Header.module.css";
import bg from "../../img/bg.jpg";
import HeaderCartButton from './HeaderCartButton';
import Cart from "../Cart/Cart";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Transfer Market</h1>
        <HeaderCartButton onUserClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={bg}></img>
      </div>
    </Fragment>
  );
};

export default Header;
