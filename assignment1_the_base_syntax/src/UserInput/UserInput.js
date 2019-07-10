import React, { Component } from 'react';
import './UserInput.css';

const userInput = (props) => {
        return (
            <div className="inputContainer">
                <input className="userInput" type="text" onChange={props.changed} value={props.currentName}></input>
            </div>
        )
}

export default userInput;

//Solution