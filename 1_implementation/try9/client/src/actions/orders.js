import * as api from '../api/'; 

// actoin creators

export const getOrders = ()=> async (dispatch) =>{
    try{
        const {data} = await api.fetchOrders();

        dispatch({type:'FETCH_ALL',payload:data});
    }catch(err){
        console.log(err.message);
    }
}



export const createOrder = (order)=> async (dispatch) =>{
    try{
        const {data} = await api.createOrder(order);
        dispatch({type:'CREATE',payload:data});
    }catch(err){
        console.log(err.message);
    }
}

export const updateOrder = (id,order) => async(dispatch)=>{
    try{
        const {data} = await api.updateOrder(id,order)
        dispatch({type:'UPDATE',payload:data})
    }
    catch(error){
        console.log(error.message)
    }
} 