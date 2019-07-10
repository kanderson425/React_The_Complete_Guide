import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Kyle'
  };

  switchNameHandler = ( event ) => {
    this.setState({
      username: event.target.value
    })
  };


  render() {
    return (
      <div className="App">
        <UserInput 
          userName={this.state.username}
          changed={this.switchNameHandler}
          currentName={this.state.username}
        />
        <UserOutput 
          userName={this.state.username}
        />
        <UserOutput 
          userName={this.state.username}
        />
        <UserOutput 
          userName={this.state.username}
        />

      </div>
    );
  }
}

export default App;

//Solution
