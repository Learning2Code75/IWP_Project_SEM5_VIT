const reducer = (clients=[],action)=>{
	switch(action.type){
		case 'FETCH_ALL':
			return action.payload;

		case 'CREATE':
			return [...clients,action.payload];

		default:
			return clients;


	}
}

export default reducer;