import React,{useState,useEffect} from 'react';
import{
  Link
} from 'react-router-dom';
import ProductUpdate from './ProductUpdate';
const Products = ()=>{
	
	const [products,setProducts] = useState([])

	useEffect(()=>{
		const fetchHandler = async()=>{
			await fetch('http://localhost:5000/products/')
			.then((res)=>res.json())
			.then((d)=>{
				console.log(d);
				setProducts(d.products)
			 })
			.catch((err)=>{
				console.log(err);
			});
		}

		fetchHandler();
	} ,[]);	

	return(products.map((product)=>(
			<div className="product-card" key = {product._id}>
				<h1>{product.name}</h1>
				<div className="img">
					<img src={product.imageurl} alt={product.name} />
				</div>
				<p>{product.description}</p>
				<h2>{product.price}</h2>
				<Link to={`/products/${product._id}`}>
     				<button type="button">
			          Edit
					</button>
				</Link>
			</div>
		))
	);
}

export default Products;