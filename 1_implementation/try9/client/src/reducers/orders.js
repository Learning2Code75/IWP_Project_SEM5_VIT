
const reducer = (orders=[],action)=>{
	switch(action.type){
		case 'FETCH_ALL':
			return action.payload;

		case 'CREATE':
			return [...orders,action.payload];

        case 'UPDATE':
            return orders.map((order)=> order._id === action.payload._id ? action.payload: order);

		default:
			return orders;


	}
}
 
export default reducer;