import React from 'react';
const Client = ()=>{
	return(
		<div className="order">	
		<select name="order-operation" id="">
			<option value="create">Create Client</option>
			<option value="create">View all Clients</option>
			<option value="create">Update/Delete Client</option>
		</select>
		<h1>
			Create Client
		</h1>
		<div>
			<h1>Client details</h1>
			<div className="form">
				<input type="text" placeholder="Client Company Name" />
				<input type="text" placeholder="Client Contact Person Name" />
				<input type="text" placeholder="Client Address" />
				<input type="text" placeholder="Client GSTIN/UIN" />
				<input type="text" placeholder="Client Phone Number" />
				<input type="text" placeholder="Client Discount Rate" />
				<input type="text" placeholder="Mode/Terms of Payment" />

				<input type="email" placeholder="Client Email" />
				<input type="text" placeholder="Client Website" />
				<input type="text" placeholder="Client Instagram" />
				<input type="text" placeholder="Client Facebook" />
				<input type="text" placeholder="Client LinkedIN" />
				<input type="text" placeholder="Client Twitter" />


				<select name="order-operation" id="">
					<option value="create">Salesperson1</option>
					<option value="create">Salesperson2</option>
					<option value="create">Salesperson3</option>
				</select>

				<button>Create </button>
			</div>

		</div>

		<hr />
		<h1>
			View All Clients
		</h1>
		<div className="functionalityDashboard">
			<div className="fDCard">
				<h3>Client ID:10001</h3>
				<p>Client Name:Client1</p>
				<p>Client Email:client1@gmail.com</p>	
				<p>Client Phone: 9809898089</p>
				<button>Delete </button>

			</div>
			<div className="fDCard">
				<h3>Client ID:10002</h3>
				<p>Client Name:Client2</p>
				<p>Client Email:client2@gmail.com</p>	
				<p>Client Phone: 9809898089</p>
				<button>Delete </button>

			</div>
			<div className="fDCard">
				<h3>Client ID:10002</h3>
				<p>Client Name:Client2</p>
				<p>Client Email:client2@gmail.com</p>	
				<p>Client Phone: 9809892089</p>
				<button>Delete </button>

			</div>
			<div className="fDCard">
					<p>Full client information fetched from database on click of the card.</p>
			</div>

			
		</div>

		<hr />
		<h1>
			Update  Client
		</h1>
		<div className="form">
				<input type="text" placeholder="Client Name" />
				<input type="text" placeholder="Client Phone Number" />
				<input type="email" placeholder="Client Email" />
				<input type="text" placeholder="Client Website" />
				<input type="text" placeholder="Client Instagram" />
				<input type="text" placeholder="Client Facebook" />
				<input type="text" placeholder="Client LinkedIN" />
				<input type="text" placeholder="Client Twitter" />
				<input type="text" placeholder="Client Address" />
				<input type="text" placeholder="Client GSTN" />


				<select name="order-operation" id="">
					<option value="create">Salesperson1</option>
					<option value="create">Salesperson2</option>
					<option value="create">Salesperson3</option>
				</select>

				<button>Update </button>
			</div>


	</div>
	)
}

export default Client;