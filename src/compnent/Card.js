import React from 'react'
import "../css/Card.css";


const Card = (props) => {
    return (
        <div>
            <img src={props.image} alt="card" />
        </div>
    )
}

export default Card;
