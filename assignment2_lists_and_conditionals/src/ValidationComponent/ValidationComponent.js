import React from 'react';
import './ValidationComponent.css';

const ValidationComponent = (props) => {
    return (
        <div className="validationComponent">
            {
                props.inputLength > 5 ?
                <p>Text too long!</p> :
                <p>Text too short!</p>
            }
          
         
        </div>
    )
}

export default ValidationComponent;