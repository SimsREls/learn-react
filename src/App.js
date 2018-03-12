import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = "Ray";
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{name}s To Do list</h1>
            <h2>
              <button className="App-button">Refresh</button>
            </h2>
        </header>
        <li className="App-body-text">STOP</li>
        <li className="App-body-text">TAKING</li>
        <li className="App-body-text">SHORT</li>
        <li className="App-body-text">CUTS</li>
      </div>
    );
  }
  // render(){
  //   return (
  //     <div className="App">
  //      <header className = "App">
  //        <h1 className = "App">Steal My Code</h1>
  //     </header>
  //     </div>
  //   )
  // }
}

export default App;
