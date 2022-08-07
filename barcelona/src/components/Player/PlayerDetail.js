import React, { useState, useContext } from "react";
import Modal from "../Modal/Modal";
import styles from "./PlayerDetail.module.css";
import CartContext from "../../store/cart-context";

const PlayerDetail = (props) => {
  const [amount, setAmount] = useState(0);
  const cartCtx = useContext(CartContext);

  const addHandler = () => {
    setAmount(amount + 1);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      img2: props.img2,
      postion: props.postion
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
          <button onClick={addHandler}>+ ADD</button>
          <button onClick={props.onClose}>Close</button>
        </form>
      </div>
    </Modal>
  );
};

export default PlayerDetail;
