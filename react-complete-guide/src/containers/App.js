import React, { Component } from 'react';
// import {useState} from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from '../components/Cockpit/Cockpit.css';

//Class Based Approach
class App extends Component {
  state = {
    persons: [
      {id: 'asfa1', name: 'Max', age: 28},
      {id: 'vasdf1', name: 'Manu', age: 29},
      {id: 'asdf1', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //this is the more modern approach
    const person = {
      ...this.state.persons[personIndex]
    };

    //alternative approach
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons}); //Now we can call the setState method and mutate our persons array (which was our copy) so we can avoid mutating state directly
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    //BELOW IS BASICALLY THE EQUIVALENT TO THE SLICE APPROACH - MORE MODERN WAY => We use the spread operator here. It's way easier
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    
    this.setState({showPersons: !doesShow})
  }
  
  render () {
      let persons = null;


      if (this.state.showPersons) {
        persons = (
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
            />
        );
      };

    return (
      <div className="App">
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}

      </div>
    )
  }
}


export default App;




