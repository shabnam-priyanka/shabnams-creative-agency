import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Component/Home/Home';


function App() {
  return (



    <Router>

      <Switch>
        <Route path="/home">
        <Home></Home>

        </Route>
        <Route path="/login">

        </Route>
        <Route path="/registration/:_id">

        </Route>
        <Route path="/volunteerdetails">

        </Route>
        <Route path="/volunteeractivity">

        </Route>

          <Route path="/adminpanel">

          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
            </Switch>
      </Router>
    
    
  );
}

export default App;
