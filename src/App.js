import React, { Component } from 'react';
import './App.css';
import FunctionalComponents from './FunctionalComponents';
import ClassComponent from './ClassComponent';

let count = 1

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         components go here<br/>
         <FunctionalComponents passCount={count}/>
         <ClassComponent count={count}/>
        </header>
      </div>
    );
  }
}

export default App;
