import * as api from '../api/';

// action creators

export const getClients = () => async (dispatch) =>{
	
	try{
		const {data} = await api.fetchClients();

		dispatch({type:'FETCH_ALL',payload:data});
	}catch(err){
		console.log(err.message);
	}


}

export const createClient = (client) => async (dispatch)=>{
	try{
		const {data} = await api.createClient(client);
		dispatch({type:'CREATE',payload:data})
	}catch(err){
		console.log(err);
	}
}