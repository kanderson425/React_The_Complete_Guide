import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

//Class Based Approach
class App extends Component {
  state = {
    length: '0'
  }



  render () {
    return (
      <div className="App">
        <h1>Assignment2: Lists & Conditionals</h1> 
        <input type="text" value="Insert Text Here" />
        <br>
        </br>
        <ValidationComponent />
        <CharComponent />
      
      </div>
    );
  }

};
export default App;
