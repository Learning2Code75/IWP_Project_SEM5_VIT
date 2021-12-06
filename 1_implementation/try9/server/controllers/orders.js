const mongoose = require('mongoose');
const OrderMessage = require('../models/orderMessage.js');

 
const getOrders =async (req,res)=>{
	try{
		const orders = await OrderMessage.find();
		console.log(orders);

		return res.status(200).json(orders);
		// return res.status(200).send(orders);
	}catch(error){
		// return res.status(404).json({message:error.message});
		return res.status(404).send({message:error.message});
	}
}
const createOrder = async(req,res)=>{
	const order = req.body;
	console.log(order)
	const newOrder = new OrderMessage(order);
	try{
		await newOrder.save();
		return res.status(201).json(newOrder);
		// res.status(201).send(newClient);

	}catch(error){
		return res.status(409).json({message:error.message});
		// res.status(409).send({message: error.message});
	}
}

const updateOrder = async (req,res)=>{
    const {id:_id} = req.params;
    const order = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No order with that id');
    }
    const updatedPost = await OrderMessage.findByIdAndUpdate(_id,order,{new:true});
        return res.status(200).json(updatedPost);

}



module.exports = {getOrders,createOrder,updateOrder};