import React, { Fragment, useState } from "react";
import styles from "./Player.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PlayerDetail from "./PlayerDetail";

const Player = (props) => {
  const [index, setIndex] = useState(0);
  const { id, name, price, postion, num, img, img2 } = props.players[index];

  const indexPlusHandler = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const indexMinusHandler = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const checkIndex = (num) => {
    if (num > props.players.length - 1) {
      return 0;
    }
    if (num < 0) {
      return props.players.length - 1;
    }
    return num;
  };

  const [showDetail, setShowDetail] = useState(false);
  const showDetailHandler = () => {
    setShowDetail(true);
  };
  const hideDetailHandler = () => {
    setShowDetail(false);
  }

  return (
    <Fragment>
      {showDetail && <PlayerDetail id={id} name={name} price={price} img={img} img2={img2} postion={postion} num={num} onClose={hideDetailHandler}></PlayerDetail>}
      <div className={styles.container}>
        <div className={styles.card}>
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.bar}>
            <div className={styles.emptybar}></div>
            <div className={styles.filledbar}></div>
          </div>
          <div className={styles.info}>
            <img src={img2} alt={name}></img>
            <button className={styles.btn} onClick={showDetailHandler}>
              More...
            </button>
          </div>
        </div>
        <div className={styles["button-container"]}>
          <button className={styles["prev-btn"]} onClick={indexMinusHandler}>
            <FaChevronLeft></FaChevronLeft>
          </button>
          <button className={styles["next-btn"]} onClick={indexPlusHandler}>
            <FaChevronRight></FaChevronRight>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Player;

{
  /* <article key={id} className={styles["player-list"]}>
<img src={img} alt={name} className={styles.img}></img>
<div className={styles["player-info"]}>
  <header>
    <h4>{name}</h4>
    <p>{num}번</p>
    <h4 className={styles.price}>{price}억</h4>
  </header>
  <button className={styles.btn}>Buy</button>
</div>
</article> */
}
