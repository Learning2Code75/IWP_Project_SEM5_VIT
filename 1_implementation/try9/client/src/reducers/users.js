const reducer = (user=[],action)=>{
	switch(action.type){
		case 'LOGIN':
			return [...user,action.payload];

		case 'CREATE':
			return [...user,action.payload];

		default:
			return user;


	}
}

export default reducer;