import React from 'react';
const Login = ()=>{
	return(
		<div className="order">	

		<h1>
			Login 
		</h1>
		<div>
			<div className="form">
				<input type="text" placeholder="Username/Email" />
				<input type="text" placeholder="Password" />
				<select name="order-operation" id="">
					<option value="manager">Manager</option>
					<option value="manager">Salesperson</option>
					<option value="manager">Financier</option>
					<option value="manager">Warehouser</option>

				</select>				
				<button>Login </button>
			</div>

		</div>
		</div>

	)
}

export default Login;