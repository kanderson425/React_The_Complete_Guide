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

  deleteCharComponentHandler = (index) => {
    const text = this.state.userInput.split('');
    const letters = [...text]
    letters.splice(index, 1);
    const letterStr = letters.join('');
    this.setState({userInput: letterStr})
   
  }

  render () {

      const letters = this.state.userInput.split('').map((letter, index) => {
            return <CharComponent 
            letter={letter}
            key={index}
            clicked={() => this.deleteCharComponentHandler(index)}/>
          });
    
 

    return (
      <div className="App">
        <h1>Assignment 2: Lists & Conditionals</h1>
        <hr />
        <input 
          type="text" 
          onChange={this.inputChangeHandler} 
          value={this.state.text} />
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
