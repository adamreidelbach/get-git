import React, { Component } from 'react';
import Homepage from './pages/Homepage/Homepage';
import Tutorial from './pages/Tutorial/Tutorial';
import Error from './pages/Error/Error';
import { Route, Switch } from 'react-router-dom';
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* allow for any id that follows /exercise/ */}
          <Route path="/exercise/:id" component={Tutorial} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
