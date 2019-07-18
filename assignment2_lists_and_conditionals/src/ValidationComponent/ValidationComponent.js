import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {
    return (
        <div className="validationComponent">
            <h1>{props.input}</h1>
        </div>
    )
}

export default validationComponent;