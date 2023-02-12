import React from 'react';
import styles from './tariff.css';

export default function Tariff (props) {
    return (
      <div className={styles.Card}>
        <h2>{props.title}</h2>
        <div>{props.price}</div>
        <div>{props.description}</div>
        <div>{props.details}</div>
      </div>
    );
  }
  
