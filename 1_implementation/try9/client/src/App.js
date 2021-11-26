import axios from 'axios';
import {saveAs} from 'file-saver';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
import Navbar from './cmps/Navbar/Navbar'
import './App.css'

function App() {

  return(
    <Router>
         <Navbar />
         <Switch>
         <Route exact path="/">
            <FunctionalityDashboard />
         </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/order">
            <Order />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/client">
            <Client />
          </Route>
          <Route exact path="/analytics">
            <Analytics />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
    </Router>
  )

}

export default App;