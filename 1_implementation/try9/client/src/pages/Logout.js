import React,{useContext} from 'react';
// import AuthReducer from '../Context/AuthReducer';
import { AuthContext } from '../Context/AuthContext';

const Logout = ()=>{

	const INITIAL_STATE = {
		user:null,
		isFetching:false,
		error:false
	};

	// const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);
	const {dispatch} = useContext(AuthContext);
	const Logout = ()=>{
		dispatch({type:"LOGOUT"})
	}
	Logout();
	return(
		<>	
			<h1>
				Logout
			</h1>
		</>
	)
}

export default Logout;