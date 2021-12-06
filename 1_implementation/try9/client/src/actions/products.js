import * as api from '../api/';

// action creators

export const getProducts = () => async (dispatch) =>{
	
	try{ 
		const {data} = await api.fetchProducts();

		dispatch({type:'FETCH_ALL',payload:data});
	}catch(err){
		console.log(err.message);
	}


}

export const createProduct = (product) => async (dispatch)=>{
	try{
		const {data} = await api.createProduct(product);
		dispatch({type:'CREATE',payload:data})
	}catch(err){
		console.log(err); 
	}
}

export const updateProduct = (updateDetails)=>async(dispatch) =>{
	try{
		const {data} = await api.updateProduct(updateDetails);
		console.log(data);
		dispatch({type:'UPDATE',payload:data})
	}
	catch(error){
		console.log(error.message);
	}
}