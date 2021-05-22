import React from 'react'
import "../css/Card.css";


const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt="card" />
        </div>
    )
}

export default Card;
