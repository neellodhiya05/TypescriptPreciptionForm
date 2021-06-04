import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { NavLink } from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import {Simple} from "./Simple";
import { Advanced } from './Advanced';


function App() {
  return (
    <div className="container">
    <div className="row">
      <div className="col">
      <NavLink  exact activeClassName="active_class" to="/" >Simple Form</NavLink>
      </div>
      <div className="col">
      
      </div>
      <div className="col">
        
      </div>
      <div className="col">
      <NavLink   exact activeClassName="active_class" to="/advanced" >Advanced Form</NavLink>
      </div>
    </div>
    <Switch>
        <Route  exact path= "/" component={Simple}/>
        <Route path="/advanced" component={Advanced} />
      </Switch>
  </div>
  );
}

export default App;

