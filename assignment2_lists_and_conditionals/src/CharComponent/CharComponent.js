import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
        <div className="CharComponent">
            <p onClick={props.clicked}>{props.letter}</p>
        </div>
    )
}

export default charComponent;