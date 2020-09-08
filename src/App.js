import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import TicTacToe from './Pages/TicTacToe';

class App extends React.Component{
  render(){
    return (
      <Router>
      <div className="App">

        <header className="App-header">
          <Link to="/"> <img src={logo} className="App-logo" alt="logo" /> </Link>
        </header>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/singletictactoe">
                <TicTacToe type = {"single"}/>
              </Route>
              <Route exact path="/multitictactoe">
                <TicTacToe type = {"multi"}/>
              </Route>
            </Switch>
            
      </div>
      </Router>
    );
  }
}

export default App;
