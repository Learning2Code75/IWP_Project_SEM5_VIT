import React from "react";

const CreateProduct = ()=>{
    return(
        <div>
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


        </div>

    )


}


export default CreateProduct;