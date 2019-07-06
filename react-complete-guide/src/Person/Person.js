import React from 'react';

//Using ES6 - this is how we will create this component using const
//We will use the arrow function courtesy of ES6, this is better form

const person = (props) => {

    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        
        </div>
    
    
    
    )

}

export default person;
