import React, { Component } from 'react';
import Employee from './component/Employee';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Employee Data</h1>
        <Employee />
      </main>
    );
  }
}

export default App;
