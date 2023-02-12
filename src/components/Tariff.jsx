import React from 'react';

export default function Tariff (props) {
    return (
      <div className="card">
        <h2>{props.title}</h2>
        <div>{props.price}</div>
        <div>{props.description}</div>
        <div>{props.details}</div>
      </div>
    );
  }
  
