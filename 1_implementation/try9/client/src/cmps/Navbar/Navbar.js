import React from 'react';
import {
  Link
} from "react-router-dom";

import './navbar.css';

const Navbar = ()=>{
	return(
		<>	
			<nav>
        <div className="logo">DLOM</div>
				 <ul>
            <li>
              <Link to="/">Functionality Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/client">Client</Link>
            </li>
            <li>
              <Link to="/analytics">Analytics</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>

          </ul>
          <div className="user">
          	User: Manager
          </div>	
			</nav>
		</>
	)
}

export default Navbar;