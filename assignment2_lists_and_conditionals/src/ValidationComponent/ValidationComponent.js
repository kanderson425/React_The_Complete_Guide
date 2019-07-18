import React from 'react';
import './ValidationComponent.css';

const ValidationComponent = (props) => {
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Text too short';
    }
    return (
        <div className="validationComponent">
            <p>{validationMessage}</p>
          
        </div>
    )
}

export default ValidationComponent;