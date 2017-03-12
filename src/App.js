import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Generator from './components/generator/Generator';

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className = "app container-fluid">
        <h1 className = "app-header"><b>Startup matrix generator</b></h1>

        <Generator />
        
          


      
      </div>
    );
  }
}

export default App;
