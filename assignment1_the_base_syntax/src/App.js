import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  return (
    <div className="App">
      <UserInput 
        userName="Kyle"
      />
      <UserOutput 
        userName="Sarah"
      />
      <UserOutput 
        userName="Zach"
      />
      <UserOutput 
        userName="Curtis"
      />

    </div>
  );
}

export default App;
