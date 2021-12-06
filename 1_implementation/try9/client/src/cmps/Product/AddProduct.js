import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../actions/products';

const AddProduct = ()=>{

	const dispatch = useDispatch();

	const [prodUpdateData,setProdUpdateData] = useState({
		prodSKU:'',
		prodQty:'',
		updateChoice:'',
	})
	const clear = ()=>{
		setProdUpdateData({
			prodSKU:'',
			prodQty:'',
			updateChoice:''
		})
	}
	const handleProdUpdateSubmit = (e)=>{
		e.preventDefault();
		dispatch(updateProduct(prodUpdateData));
		clear();
	}

    return(
        <div>
            <h1>
				Add/Reduce  Product Stock
			</h1>
			<div>
				<form autoComplete="off" noValidate className="form" onSubmit={handleProdUpdateSubmit} >
					{/* <select value={prodUpdateData.updateChoice} onChange={(e)=>setProdUpdateData({...prodUpdateData,updateChoice:e.target.value})}>
						<option>Select Add or Remove </option>
						<option>Add</option>
						<option>Remove</option>
					</select> */}
					{/* <input type="text" placeholder="Product Name" /> */}
					<input type="text" placeholder="Product SKU" value={prodUpdateData.prodSKU} onChange={(e)=>setProdUpdateData({...prodUpdateData,prodSKU:e.target.value})} />
					<input type="number" placeholder="Latest Stock" value={prodUpdateData.prodQty} onChange={(e)=>setProdUpdateData({...prodUpdateData,prodQty:e.target.value})} />
					<button type="submit">Update(Add/Delete)</button>
				</form>
			</div>
        </div>

    );

}

export default AddProduct;