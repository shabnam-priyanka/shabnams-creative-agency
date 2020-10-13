import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import ServicesDetail from './Component/ServicesDetail/ServicesDetail';





export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (

    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/servicedetails">
          <ServicesDetail></ServicesDetail>
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
      </UserContext.Provider>
    </div>




  );
}

export default App;
