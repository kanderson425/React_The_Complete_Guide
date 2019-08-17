import React from 'react';
import './Person.css';


//Using ES6 - this is how we will create this component using const
//We will use the arrow function courtesy of ES6, this is better form

const person = (props) => {
    const rnd = Math.random();

    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>

        
        </div>
    
    
    
    )

}

export default person;
