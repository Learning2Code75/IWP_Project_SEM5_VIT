import React,{useState,useContext} from 'react';


import { AuthContext } from '../../Context/AuthContext';

import { 
  Link
} from "react-router-dom";
import dlom from '../../images/DLOM.svg';


import './navbar.css';

const Navbar = ()=>{

  // const [user,setUser]= useState("");

  const {user:userFromContext} = useContext(AuthContext);
  console.log(userFromContext)
 


	return(
		<>	
			<nav>
        <Link to="/" className="logo"><img src={dlom} alt="DLOM" height="60"/></Link>
				 <ul>
         { !(userFromContext) && (<li>
              <Link to="/login">Login</Link>
            </li>
          ) }
          { (userFromContext) &&(
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
            {/* <li>
              <Link to="/analytics">Analytics</Link>
            </li> */}
            <li>
              <Link to="/logout">Logout</Link>
            </li>

            </>
          )}  

          </ul>
          
          {(userFromContext) &&(<div className="user">
            User: {`${userFromContext[0].username}(${userFromContext[0].role})`}
          </div>  )}
			</nav>
		</>
	)
}

export default Navbar;