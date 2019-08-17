import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
    let assignedClasses = " ";
    let btnClass = "button";
    if(props.showPersons) {
        btnClass = "buttonRed";
    }
    if(props.persons.length <= 2) {
      assignedClasses = "red"; //assignedClasses = ['red']
    }
    if(props.persons.length <= 1) {
      assignedClasses = "red bold"; //assignedClasses = ['red', 'bold']
    
    }

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses}>This is really working</p>
            <button 
                className={btnClass}
                onClick ={props.clicked}>Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;