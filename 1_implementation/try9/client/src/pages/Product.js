import React,{useState} from 'react';
import CreateProduct from '../cmps/Product/CreateProduct';
import ReadProduct from '../cmps/Product/ReadProduct';
import UpdateDelProduct from '../cmps/Product/UpdateDelProduct';
import AddProduct from '../cmps/Product/AddProduct';
const Product = ()=>{
	const [page,setPage] = useState("select");

	const handleChange =(e)=>{
		setPage(e.target.value)
	}

	return(
		<div className="order">	
			<select name="order-operation" id="" value={page} onChange={handleChange} className="mainSelector">
				<option value="select operation">Select an Operation</option>
				<option value="create">Create Product</option>
				<option value="read">View all Products</option>
				<option value="updatedel">Update/Delete Product</option>
				<option value="add">Add/Remove Product Stock</option>


			</select>

			{ (page == "create") && <CreateProduct/> }

			<hr />
			{ (page == "read" )&& <ReadProduct/> }	
			<hr />

			{(page == "updatedel") && <UpdateDelProduct/>}

			<hr/>

			{(page == "add") && <AddProduct/>}

		</div>
	)
}

export default Product;