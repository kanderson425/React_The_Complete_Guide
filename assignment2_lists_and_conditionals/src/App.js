import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

//Class Based Approach
class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    const userInput = this.state.userInput;
    this.setState({userInput: event.target.value});

  }

  render () {
    let letters = null;
    let lettersArray = this.state.userInput.split('');
    if(this.state.userInput.length) {
      letters = (
        <p>
          {lettersArray.map(letter => {
            return <CharComponent letter={letter}/>
          })}
        </p>
      )
    }

    return (
      <div className="App">
        <h1>Assignment 2: Lists & Conditionals</h1>
        <hr />
        <input type="text" onChange={this.inputChangeHandler} value={this.state.text} />
        <p>{this.state.userInput}</p>
        <hr></hr>
        <ValidationComponent 
          inputLength={this.state.userInput.length}
        />
        {letters}
      
      </div>
    );
  }

};
export default App;
