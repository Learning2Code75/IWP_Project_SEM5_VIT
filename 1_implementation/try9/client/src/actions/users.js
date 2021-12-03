import * as api from '../api/';

// action creators

export const getUser = (userId) => async (dispatch) =>{
	
	try{
		const {data} = await api.fetchUser(userId);

		dispatch({type:'FETCH_ALL',payload:data});
	}catch(err){
		console.log(err.message);
	}


}

export const createUser = (user) => async (dispatch)=>{
	try{
		const {data} = await api.createUser(user);
		dispatch({type:'CREATE',payload:data})
	}catch(err){
		console.log(err);
	}
}