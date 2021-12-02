import React from 'react';

const CreateClient = ()=>{
    return(
        <div>
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


        </div>
    );
}


export default CreateClient;