import React from "react";
import styles from "./tariff.css";

export default function Tariff(props, flag) {
  const c1 = props.color=="red" ? "active" : "";

  return (
    <div className={styles.Card + " " + styles[c1]}>
      <div className={styles.Title + " " + styles[props.color]}>
        {props.title}
      </div>
      <div className={styles.Price + " " + styles[props.color]}>
        <span className={styles.Rate}>руб.</span>
        {props.price}
        <span className={styles.Rate}>/мес.</span>
      </div>
      <div className={styles.Description}>{props.description}</div>
      <div className={styles.Details}>{props.details}</div>
    </div>
  );
}
