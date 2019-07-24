import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
        <div className="CharComponent" onClick={props.clicked}>
            <p>{props.letter}</p>
        </div>
    )
}

export default charComponent;