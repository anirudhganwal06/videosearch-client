import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Videos from './containers/Videos';

class App extends Component{
  render(){
    return (
      <div className="App">
		  <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Home} />
          <Route exact path='/videos' component={Videos} />
      </div>
    );
  }
}

export default App;
