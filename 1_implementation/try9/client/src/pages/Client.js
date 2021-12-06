import React,{useState} from 'react';
import CreateClient from '../cmps/Client/CreateClient';
import ViewClient from '../cmps/Client/ViewClient';
import UpdateDelClient from '../cmps/Client/UpdateDelClient';
const Client = ()=>{
	const [page,setPage] = useState("select");
	const handleChange = (e)=>{
		setPage(e.target.value);
		console.log(page);
	}

 	
	return(
		<div className="order">	
		<select name="order-operation" id="" className="mainSelector" value={page} onChange={handleChange}>
			<option value="select">Select Operation</option>
			<option value="create">Create Client</option>
			<option value="view">View all Clients</option>
			{/* <option value="updel">Update/Delete Client</option> */}
		</select>

		{page=="create" && <CreateClient/>}

		<hr />

		{page == "view" && <ViewClient />}

		<hr />

		{page == "updel" && <UpdateDelClient/>}

	</div>
	)
}

export default Client;