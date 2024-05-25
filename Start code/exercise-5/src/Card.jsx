// Card.jsx
import React from 'react';

function Card({ image, name, class: studentClass, hobbies }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{studentClass}</p>
      <p>{hobbies} </p>
    </div>
  );
}

export default Card;