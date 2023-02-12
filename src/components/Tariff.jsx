import React from "react";
import styles from "./tariff.css";

export default function Tariff(props) {
  return (
    <div className={styles.Card}>
      <div className={styles.Title}>{props.title}</div>
      <div className={styles.Price}>
        <span className={styles.Rate}>руб.</span>
        {props.price}
        <span className={styles.Rate}>/мес.</span>
      </div>
      <div className={styles.Description}>{props.description}</div>
      <div className={styles.Details}>{props.details}</div>
    </div>
  );
}
