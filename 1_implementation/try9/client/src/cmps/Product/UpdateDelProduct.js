import React from 'react';

const UpdateDelProduct = ()=>{
    return(
        <div>

            <div>
                <h1>
                    Update  Product
                </h1>

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
        </div>
    );

}

export default UpdateDelProduct;