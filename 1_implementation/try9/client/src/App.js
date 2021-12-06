import axios from 'axios';
import {saveAs} from 'file-saver';
import {useState,useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
  Redirect
} from "react-router-dom";

import FunctionalityDashboard from './pages/FunctionalityDashboard';
import Analytics from './pages/Analytics';
import Client from './pages/Client';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Order from './pages/Order';
import Product from './pages/Product';
import Register from './pages/Register';


import Invoice from './cmps/Invoice/Invoice';
import Navbar from './cmps/Navbar/Navbar';
import { AuthContext } from './Context/AuthContext';

import './App.css'

function App() {
  const {user} = useContext(AuthContext)

  return(
    <Router>
         <Navbar />
         <Switch>
         <Route exact path="/">
            {user?<FunctionalityDashboard />:<Login />}
         </Route>
          <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register">
            {user?<Register />:<Login/>}
          </Route>
          <Route exact path="/order">
            {user?<Order />:<Login />}
            
          </Route>
          <Route exact path="/product">
          {user?<Product />:<Login />}
          </Route>
          <Route exact path="/client">
          {user?<Client />:<Login />}
          </Route>
          <Route exact path="/analytics">
          {user?<Analytics />:<Login />}
          </Route>
          <Route exact path="/logout">
          {user?<Logout />:<Redirect to="/" />}
          </Route>
        </Switch>
    </Router>
  )

}

export default App;