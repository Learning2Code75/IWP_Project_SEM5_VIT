import React from 'react';
const Register = ()=>{
	return(
		<div className="order">	

		<h1>
			Register User
		</h1>
		<div>
			<div className="form">
				<input type="text" placeholder="Username" />
				<input type="text" placeholder="Email" />
				<input type="text" placeholder="First Name" />
				<input type="text" placeholder="Last Name" />


				<input type="password" placeholder="Password" />
				<input type="password" placeholder="Confirm password" />

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

export default Register;