const reducer = (products=[],action)=>{
	switch(action.type){
		case 'FETCH_ALL':
			return action.payload;

		case 'CREATE':
			return [...products,action.payload];

		case 'UPDATE':
			return products.map((prod)=> prod._id === action.payload._id ? action.payload: prod)
		
		default:
			return products;
 

	}
}

export default reducer;