import React, { useState } from "react";
import styles from "./tariff.css";

export default function Tariff(props) {
  const { title, color, price, description, details, id } = props.item;

  const c1 = props.isBoolean ? "active" : "";

  function getId() {
    console.log(id);
    props.setCount(id);
  }

  return (
    <div className={styles.Card + " " + styles[c1]} onClick={getId}>
      <div className={styles.Title + " " + styles[color]} onClick={getId}>
        {title}
      </div>
      <div className={styles.Price + " " + styles[color]}>
        <span className={styles.Rate}>руб.</span>
        {price}
        <span className={styles.Rate}>/мес.</span>
      </div>
      <div className={styles.Description}>{description}</div>
      <div className={styles.Details}>{details}</div>
    </div>
  );
}
