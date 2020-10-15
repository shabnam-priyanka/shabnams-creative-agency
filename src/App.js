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
import OrderStatus from './Component/OrderStatus/OrderStatus';
import Review from './Component/Review/Review';
import AdminPanel from './Component/AdminPanel/AdminPanel';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AddService from './Component/AddService/AddService';





export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (

    <div>
      <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
      <Router>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/servicedetails">
          <ServicesDetail></ServicesDetail>
          </PrivateRoute>
          <Route path="/orderstatus">
          <OrderStatus></OrderStatus>
          </Route>
          <Route path="/review">
          <Review></Review>
          </Route>
          <Route path="/addservice">
          <AddService></AddService>
          </Route>
          <Route path="/adminpanel">
            <AdminPanel></AdminPanel>
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
