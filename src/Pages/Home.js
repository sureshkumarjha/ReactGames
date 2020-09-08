import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Home extends React.Component{
  render(){
    return (
      <div className="Align-Center">
          <h1 className = "reactShadow"> WELCOME </h1>

          <div className = "cardlist">
            
            <Link to="/singletictactoe" style={{textDecoration:"none", color:"black"}}>
            <div className = "card Align-Center">
              <span>Single Player</span><span>TicTacToe</span>
            </div>
            </Link>

            <Link to="/multitictactoe" style={{textDecoration:"none", color:"black"}}>
            <div className = "card Align-Center">
              <span>Multi Player</span><span>TicTacToe</span>
            </div>
            </Link>

          </div>
          
      </div>
    );
  }
}

export default Home;
