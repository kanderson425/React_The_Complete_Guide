import React, { Component } from 'react';
// import {useState} from 'react';
import './App.css';
import Person from './Person/Person';

//This is React Hooks-based approach
// const App = (props) => {
//   const [ personsState, setPersonsState] = useState(
//     {
//       persons: [
//         {name: 'Max', age: 28},
//         {name: 'Manu', age: 29},
//         {name: 'Stephanie', age: 26}
//       ]
//     }
//   );

//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // console.log('Was clicked');
//     // DON'T DO THIS - IN THIS CASE, WE ARE MANIPULATING STATE DIRECTLY. THIS IS WRONG.personsState.persons[0].name = 'Maximilian';
//     setPersonsState({
//       persons: [
//         {name: 'Maximilian', age: 28},
//         {name: 'Manu', age: 29},
//         {name: 'Stephanie', age: 27}
//       ]
//     });
//   };

//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working</p>
//         <button onClick ={switchNameHandler}>Switch Name</button>
//         <Person 
//           name={personsState.persons[0].name} 
//           age={personsState.persons[0].age} 
//         />
//         <Person 
//           name={personsState.persons[1].name} 
//           age={personsState.persons[1].age}>
//             My Hobbies: Racing
//         </Person>
//         <Person 
//           name={personsState.persons[2].name} 
//           age={personsState.persons[2].age}
//         />
  
//       </div>
//     );

//     // We typically don't use this type of code:
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
//   }

// export default App;



//Class Based Approach
class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  };



  // NO LONGER USING THIS METHOD
  // switchNameHandler = ( newName) => {
  //   // console.log('was clicked');
  //   // DON't DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 28},
  //       {name: 'Manu', age: 29},
  //       {name: 'Stephanie', age: 26}
  //     ]
  //   })
  // }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    //BELOW IS BASICALLY THE EQUIVALENT TO THE SLICE APPROACH - MORE MODERN WAY
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    
    this.setState({showPersons: !doesShow})
  }
  
  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}/>
            })}
          {/* THIS IS the STATIC WAY TO RENDER THE PERSONS ARRAY
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')} 
            changed={this.nameChangedHandler}> My Hobbies: Racing
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/> */}
        </div> 
        );
      }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick ={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  }
}


export default App;




