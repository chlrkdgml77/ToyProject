import React from "react";
import styles from "./Postion.module.css";

const Postion = (props) => {
  return (
    <div className={styles.container}>
      {props.postion.map((postion, index) => {
        return (
          <button className={styles.btn} type="button" key={index} onClick={() => props.filterPostion(postion)}>
            {postion}
          </button>
        );
      })}
    </div>
  );
};

export default Postion;
