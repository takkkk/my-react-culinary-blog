import React from  'react'
// import { constants } from 'os';
import './Card.css'

const Card = props => (
    <div className="Card">
        <img src={props.image}/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Card