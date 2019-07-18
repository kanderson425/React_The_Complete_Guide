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
    this.setState({useInput: event.target.value});

  }

  render () {
    return (
      <div className="App">
        <h1>Assignment 2: Lists & Conditionals</h1>
        <hr />
        <input type="text" onChange={this.inputChangeHandler} value={this.state.text} />
        <p>{this.state.userInput}</p>
 
        <ValidationComponent 
        input={this.state.userInput}
        value={this.state.userInput}
         />
        <CharComponent />
      
      </div>
    );
  }

};
export default App;
