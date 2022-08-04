import React, {useContext} from 'react'
import styles from "./HeaderCartButton.module.css";
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {

  return (
    <button className={styles.button} onClick={props.onUserClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
    </button>
  )
}

export default HeaderCartButton