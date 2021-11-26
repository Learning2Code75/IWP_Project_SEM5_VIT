import React from 'react';
const Product = ()=>{
	return(
		<div className="order">	
			<select name="order-operation" id="">
				<option value="create">Create Product</option>
				<option value="create">View all Products</option>
				<option value="create">Update/Delete Product</option>
				<option value="create">Add/Remove Product Stock</option>


			</select>
			<h1>
				Create Product
			</h1>
			<div>
				<h1>Product details</h1>
				<div className="form">
					<input type="text" placeholder="Product Name" />
					<input type="text" placeholder="Product SKU" />
					<input type="text" placeholder="Product Description" />
					<input type="text" placeholder="Product MRP" />

					<input type="text" placeholder="Product Image URL" />
					<input type="text" placeholder="Product Catergory" />
					<input type="text" placeholder="Product Stock" />
					<input type="text" placeholder="Product HSN" />
					<input type="text" placeholder="Product GSTPercent" />
					<button>Create </button>
				</div>

			</div>

			<hr />
			<h1>
				View All Products
			</h1>
			<div className="functionalityDashboard">
				<div className="fDCard">
					<h3>Product ID:10001</h3>
					<p>Product Name:Prod1</p>
					<p>Price:Rs.2000</p>	
					<p>Stock: 2</p>
					<button>Delete </button>

				</div>
				<div className="fDCard">
					<h3>Product ID:10002</h3>
					<p>Product Name:Prod2</p>
					<p>Price:Rs.5000</p>	
					<p>Stock: 3</p>
					<button>Delete </button>

				</div>
				<div className="fDCard">
					<h3>Product ID:10003</h3>
					<p>Product Name:Prod3</p>
					<p>Price:Rs.5000</p>	
					<p>Stock: 4</p>
					<button>Delete </button>

				</div>
				<div className="fDCard">
					<p>Full product information fetched from database on click of the card.</p>
				</div>
				
			</div>

			<hr />
			<h1>
				Update  Product
			</h1>
			<div>
				<h1>Product details</h1>
				<div className="form">
					<input type="text" placeholder="Product Name" />
					<input type="text" placeholder="Product SKU" />
					<input type="text" placeholder="Product Description" />
					<input type="text" placeholder="Product Price" />
					<input type="text" placeholder="Product Image URL" />
					<input type="text" placeholder="Product Catergory" />
					<input type="text" placeholder="Product Stock" />
					<input type="text" placeholder="Product HSN" />
					<input type="text" placeholder="Product GSTPercent" />

					<input type="text" placeholder="Product Stock" />

					<button>Update </button>
				</div>
				<hr />
			</div>
			<h1>
				Add/Reduce  Product Stock
			</h1>
			<div>
				<div className="form">
					<select>
						<option>Add</option>
						<option>Delete</option>
					</select>
					<input type="text" placeholder="Product Name" />
					<input type="text" placeholder="Product SKU" />
					<input type="text" placeholder="Product Stock" />
					<button>Update(Add/Delete) </button>
				</div>
			</div>

		</div>
	)
}

export default Product;