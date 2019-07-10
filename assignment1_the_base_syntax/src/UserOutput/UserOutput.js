import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
        return (
            <div className="userOutput">
                <p>{props.userName}</p>
                <p>THIS IS A TEST</p>
            </div>
        )
}

export default userOutput;