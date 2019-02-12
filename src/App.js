import React, { Component } from 'react'
import Homepage from './pages/Homepage/Homepage'
import Tutorial from './pages/Tutorial/Tutorial'
import { Route } from 'react-router-dom';
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Route exact path="/" component={Homepage} />
        <Route path="/exercise/:id" component={Tutorial} />
      </div>
    );
  }
}

export default App;
