import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Homepage  from './containers/Homepage';

class App extends Component{
  render(){
    return (
      <div className="App">
          <Route path='/' component={Homepage} />
      </div>
    );
  }
}

export default App;
