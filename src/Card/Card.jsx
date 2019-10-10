import React from 'react';
import './Card.css';




const Card = (props) => {
    const {name, email,id} = props;
    return(
        <div className="card">
            <img  alt="robots" src={`https://robohash.org/${id}`}/>
            <div className="desc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;