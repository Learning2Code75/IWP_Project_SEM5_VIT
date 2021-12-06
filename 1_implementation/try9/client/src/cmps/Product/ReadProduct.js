import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getProducts } from '../../actions/products';

const ReadProduct = ()=>{

	const dispatch = useDispatch();
	const products = useSelector((state)=> state.products);
	console.log(products);

	useEffect(()=>{
		dispatch(getProducts())
	},[dispatch]);

    return(
        <div>
            <h1>
				View All Products
			</h1>
			<div className="functionalityDashboard">
				
					{!products.length ? "Loading...":(products.map((product)=>{
						const {_id,
							productName,
							productSKU,
							productDescription,
							productMRP,
							productImage,
							productCategory,
							productStock,
							productHSN,
							productGSTPercent
						} = product;
						
						return(
							<div key={_id} className="fDCard">
								<h3>Product ID:{_id}</h3>
								{productImage && <img src={productImage} height="400" width="400" />}
								<p>productName:{productName}</p>
								<p>productSKU:{productSKU}</p>
								<p>productDescription:{productDescription}</p>
								<p>productMRP:{productMRP}</p>
								<p>productCategory:{productCategory}</p>
								<p>productStock:{productStock}</p>
								<p>productHSN:{productHSN}</p>
								<p>productGSTPercent:{productGSTPercent}</p>							
							</div>							
						)
					}))}

					
				
			</div>

			{/* <div className="functionalityDashboard">
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
				
			</div> */}

        </div>
    )

}

export default ReadProduct;