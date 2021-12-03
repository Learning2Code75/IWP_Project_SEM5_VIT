import React,{useState} from 'react';
import { 
  Link
} from "react-router-dom";
import dlom from '../../images/DLOM.svg';


import './navbar.css';

const Navbar = ()=>{

  const [user,setUser]= useState("loggedIn");

	return(
		<>	
			<nav>
        <Link to="/" className="logo"><img src={dlom} alt="DLOM" height="60"/></Link>
				 <ul>
         { !(user=="loggedIn") && (<li>
              <Link to="/login">Login</Link>
            </li>
          ) }
          { (user=="loggedIn") &&(
            <>
                          <li>
              <Link to="/">Functionalities</Link>
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

            </>
          )}  

          </ul>
          
          {(user=="loggedIn") &&(<div className="user">
            User: Manager
          </div>  )}
			</nav>
		</>
	)
}

export default Navbar;