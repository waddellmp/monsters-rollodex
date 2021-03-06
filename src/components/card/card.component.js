import React from 'react';
import './card.styles.css';

export const Card = ({ monster: { name, id, email } }) => (
    <div className="card-container">
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
);
