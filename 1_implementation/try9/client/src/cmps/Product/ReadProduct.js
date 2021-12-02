import React from 'react';

const ReadProduct = ()=>{
    return(
        <div>
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

        </div>
    )

}

export default ReadProduct;