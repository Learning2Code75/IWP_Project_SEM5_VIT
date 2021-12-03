import React,{useState} from 'react';

import {useDispatch} from 'react-redux';
import {createProduct} from '../../actions/products';



const CreateProduct = ()=>{
	const dispatch = useDispatch();

	const [productData,setProductData] = useState({
		productName:'',
		productSKU:'',
		productDescription:'',
		productMRP:0,
		productImage:'',
		productCategory:'',
		productStock:0,
		productHSN:'',
		productGSTPercent:0
	})

	const clear = ()=>{
		setProductData({
		productName:'',
		productSKU:'',
		productDescription:'',
		productMRP:0,
		productImage:'',
		productCategory:'',
		productStock:0,
		productHSN:'',
		productGSTPercent:0
		})
	}
	const handleSubmit = (e)=>{

		e.preventDefault();
		dispatch(createProduct(productData))
		clear();
	}

	console.log(productData);

    return(
        <div>
			<h1>
				Create Product
			</h1>
			<div>
				<h1>Product details</h1>
				<div autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
					<input type="text" placeholder="Product Name" value={productData.productName} onChange={(e)=> setProductData({...productData,productName:e.target.value})} />
					<input type="text" placeholder="Product SKU" value={productData.productSKU} onChange={(e)=> setProductData({...productData,productSKU:e.target.value})}/>
					<input type="text" placeholder="Product Description"  value={productData.productDescription} onChange={(e)=> setProductData({...productData,productDescription:e.target.value})}/>
					<input type="number" placeholder="Product MRP"  value={productData.productMRP} onChange={(e)=> setProductData({...productData,productMRP:e.target.value})}/>

					<input type="text" placeholder="Product Image URL" value={productData.productImage} onChange={(e)=> setProductData({...productData,productImage:e.target.value})}/>
					<input type="text" placeholder="Product Catergory" value={productData.productCategory} onChange={(e)=> setProductData({...productData,productCategory:e.target.value})} />
					<input type="number" placeholder="Product Stock"  value={productData.productStock} onChange={(e)=> setProductData({...productData,productStock:e.target.value})}/>
					<input type="text" placeholder="Product HSN" value={productData.productHSN} onChange={(e)=> setProductData({...productData,productHSN:e.target.value})}/>
					<input type="number" placeholder="Product GSTPercent" value={productData.productGSTPercent} onChange={(e)=> setProductData({...productData,productGSTPercent:e.target.value})}/>
					<button type="submit">Create Product</button>
					<button onClick={clear}>Clear</button>
					
				</div>

			</div>


        </div>

    )


}


export default CreateProduct;