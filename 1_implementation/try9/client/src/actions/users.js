import * as api from '../api/';

// action creators

export const loginUser = (userInfo) => async (dispatch) =>{
	
	try{
		const {data} = await api.loginUser(userInfo);

		dispatch({type:'LOGIN',payload:data});
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