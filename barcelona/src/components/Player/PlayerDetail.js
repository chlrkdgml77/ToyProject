import React, { useState, useContext, useRef } from "react";
import Modal from "../Modal/Modal";
import styles from "./PlayerDetail.module.css";
import CartContext from "../../store/cart-context";

const PlayerDetail = React.forwardRef((props, ref) => {
  const [amount, setAmount] = useState(0);
  const cartCtx = useContext(CartContext);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = parseInt(enteredAmount);

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.price
    })
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>{props.name}</h1>
          <p>{props.num}</p>
          <p>{props.postion}</p>
        </div>
        <h4>{props.price}억</h4>
        <form className={styles.sub} onSubmit={submitHandler}>
          <img src={props.img}></img>
          <button ref={amountInputRef}>+ ADD</button>
        </form>
      </div>
    </Modal>
  );
});

export default PlayerDetail;
