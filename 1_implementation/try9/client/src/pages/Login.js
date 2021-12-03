import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getUser} from '../actions/users';


const Login = ()=>{
	const dispatch = useDispatch();
	const user = useSelector((state)=> state.user);
	console.log(user)

	const [loginData,setLoginData]= useState({
		username:'',
		password:'',
		role:''
	})
	const handleSubmit = (e)=>{
		e.preventDefault();
		dispatch(getUser(loginData.username));
		if((loginData.username === user.username)&&(loginData.password === user.password)){
			console.log(user);
		}
	}
	console.log(loginData)
	const clear = ()=>{
		setLoginData({
			username:'',
			password:'',
			role:''	
		})
	}

	return(
		<div className="order">	

			<h1>
				Login 
			</h1>
			<div>
				<div autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
					<input type="text" placeholder="Username" value={loginData.username} onChange={(e)=> setLoginData({...loginData,username:e.target.value})} />
					<input type="text" placeholder="Password" value={loginData.password} onChange={(e)=> setLoginData({...loginData,password:e.target.value})}  />
					<select name="order-operation" id="" value={loginData.role} onChange={(e)=> setLoginData({...loginData,role:e.target.value})}>
						<option value="role">Select Role</option>
						<option value="manager">Manager</option>
						<option value="manager">Salesperson</option>
						<option value="manager">Financier</option>
						<option value="manager">Warehouser</option>

					</select>				
					<button type="submit">Login </button>
					<button onClick={clear}>Clear</button>

				</div>

			</div>
		</div>

	)
}

export default Login;