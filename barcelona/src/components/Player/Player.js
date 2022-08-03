import React from 'react'
import styles from "./Player.module.css"

const Player = (props) => {
  return (
    <div className={styles.container}>
      {props.players.map((player) => {
        const {id, name, price, num, img} = player;
        return (
          <article key={id} className={styles["player-list"]}>
            <img src={img} alt={name} className={styles.img}></img>
            <div className={styles["player-info"]}>
              <header>
                <h4>{name}</h4>
                <p>{num}번</p>
                <h4 className={styles.price}>{price}억</h4>
              </header>
              <button className={styles.btn}>Buy</button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Player