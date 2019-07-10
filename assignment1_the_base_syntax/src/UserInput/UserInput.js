import React, { Component } from 'react';
import './UserInput.css';

class userInput extends Component {

    render() {
        return (
            <div className="inputContainer">
                <input className="userInput" type="text"></input>
            </div>
        )
    }
}

export default userInput;