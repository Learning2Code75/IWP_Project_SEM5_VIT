import React from 'react';

const UpdateDelClient = ()=>{
    return(
        <div>
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


export default UpdateDelClient;