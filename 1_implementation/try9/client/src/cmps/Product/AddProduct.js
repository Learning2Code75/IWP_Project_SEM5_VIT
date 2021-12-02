import React from 'react';


const AddProduct = ()=>{
    return(
        <div>
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

    );

}

export default AddProduct;