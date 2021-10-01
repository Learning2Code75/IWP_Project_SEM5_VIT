import React,{useEffect,useState,useReducer} from 'react';
import {useParams} from 'react-router-dom';

//action: type,payload
const reducer = (state,{type,payload})=>{
	switch(type){
		case 'name':
			return {...state,name:{value:payload}};
			break;
		case 'description':
			return {...state,description:{value:payload}};
			break;
		case 'price':
			return {...state,price:{value:payload}}
			break;
		case 'imageurl':
			return {...state,imageurl:{value:payload}}
			break;
		case 'isFeatured':
			return {...state,isFeatured:{value:payload}}
			break;

		default:
			return {...state};
			break;
	}
}


const initialState = {
	name:{
		value:''
	},
	description:{
		value:''
	},
	price:{
		value:''
	},
	isFeatured:{
		value:''
	},
	imageurl:{
		value:''
	}
}

// useRducer: dispatches an action , action will be received to the reducer function


const ProductUpdate = ()=>{
	const {id} = useParams();

	const [state,dispatch] = useReducer(reducer,initialState);
	const [product,setProduct] = useState({});
	const [showForm,setShowFrom] = useState(false);

	useEffect(()=>{
		const fetchHandler = async()=>{
			await fetch(`http://localhost:5000/products/${id}`)
			.then(res=> res.json())
			.then(prod=>setProduct(prod.product))
			.catch(err=>console.log(err))
		}
		fetchHandler();
	},[id])

	const deleteHandler= ()=>{
		console.log("delete");
	}
	const updateHandler = ()=>{
		setShowFrom((e)=> !e);
		console.log("update");
	}

	const submitHandler = (e)=>{
		e.preventDefault();
	}

	return(
		<>
		<div className="product-card" key = {product._id}>
				<h1>{product.name}</h1>
				<div className="img">
					<img src={product.imageurl} alt={product.name} />
				</div>
				<p>{product.description}</p>
				<h2>{product.price}</h2>
     			<button onClick={updateHandler} type="button">
			          Edit
				</button>
     			<button onClick={deleteHandler} type="button">
			          Delete
				</button>
			</div>
		{showForm &&	<main className="main">
				<form onSubmit={submitHandler}>
					<label htmlFor="prodName">Product Name</label>
					<input type="text" id="prodName"/>
					<label htmlFor="prodDesc">Product description</label>
					<input type="text" id="prodDesc"/>
					<label htmlFor="prodPrice">Product Price</label>
					<input type="number" id="prodPrice"/>
					<label htmlFor="prodFeatured">Product Featured or Not</label>
					<input type="checkbox" id="prodFeatured"/>
					<button type="submit">Edit</button>
				</form>
			</main>
		}	

		</>
	);
}

export default ProductUpdate;