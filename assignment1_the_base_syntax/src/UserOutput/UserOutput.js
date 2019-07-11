import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    const style = {
        margin: "auto 20px"
    }

    return (
        <div className="userOutput">
            <p className="userNameOutput" style={style}>Username: {props.userName}</p>
            <p style={style}>THIS IS A TEST</p>
        </div>
    )
}

export default userOutput;

//Solution
