import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {createUser} from '../actions/users';


const Register = ()=>{
	const dispatch = useDispatch();

	const [userData,setUserData] = useState({
			username:'',
			email:'',
			firstName:'',
			lastName:'',
			password:'',
			role:''
	})

	const handleSubmit = (e)=>{
		e.preventDefault();
		dispatch(createUser(userData))
	}

	const clear =()=>{
		setUserData({
			username:'',
			email:'',
			firstName:'',
			lastName:'',
			password:'',
			role:''
		})
	}
	console.log(userData);
	return(
		<div className="order">	

			<h1>
				Register User
			</h1>
			<div>
				<form autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
					<input type="text" placeholder="Username" value={userData.username} onChange={(e)=> setUserData({...userData,username:e.target.value})}/>
					<input type="text" placeholder="Email" value={userData.email} onChange={(e)=> setUserData({...userData,email:e.target.value})} />
					<input type="text" placeholder="First Name" value={userData.firstName} onChange={(e)=> setUserData({...userData,firstName:e.target.value})} />
					<input type="text" placeholder="Last Name" value={userData.lastName} onChange={(e)=> setUserData({...userData,lastName:e.target.value})} />


					<input type="password" placeholder="Password" value={userData.password} onChange={(e)=> setUserData({...userData,password:e.target.value})} />
					{/*<input type="password" placeholder="Confirm password" value={userData.username} onChange={(e)=> setUserData({...userData,username:e.target.value})} />*/}

					<select name="order-operation" id="" value={userData.role} onChange={(e)=> setUserData({...userData,role:e.target.value})}>
						<option value="role">Select role of user</option>
						<option value="Manager">Manager</option>
						<option value="Salesperson">Salesperson</option>
						<option value="Financier">Financier</option>
						<option value="Warehouser">Warehouser</option>

					</select>				
					<button type="submit">Register</button>
					<button onClick={clear}>Clear</button>

				</form>

			</div>
		</div>

	)
}

export default Register;