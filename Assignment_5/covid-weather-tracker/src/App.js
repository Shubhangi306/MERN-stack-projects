import React , { Component } from 'react';

import Home from './components/Home';
import Weather from './components/Weather';
import { HashRouter,Route } from 'react-router-dom';
import Country from './components/Country/Country'


class App extends Component {
  render(){
    return (
      <HashRouter>
        <div>
          
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Weather' component={Weather}></Route>
          <Route path='/country/:id' component={Country}></Route>
        </div>
      </HashRouter>
    );

  }
 
}

export default App;
