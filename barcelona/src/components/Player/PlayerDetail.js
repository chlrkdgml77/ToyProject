import React, {useState} from "react";
import Modal from "../Modal/Modal";
import styles from "./PlayerDetail.module.css";

const PlayerDetail = (props) => {

  return (
    <Modal onClose={props.onClose}>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>{props.name}</h1>
          <p>{props.num}</p>
          <p>{props.postion}</p>
        </div>
        <div className={styles.sub}>
          <img src={props.img}></img>
          <button onClick={props.onClose}>Buy</button>
        </div>
      </div>
    </Modal>
  );
};

export default PlayerDetail;
