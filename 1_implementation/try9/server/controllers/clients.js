const ClientMessage = require('../models/clientMessage.js');


const getClients =async (req,res)=>{
	try{
		const clients = await ClientMessage.find();
		console.log(clients);

		// return res.status(200).json(clients);
		return res.status(200).send(clients);
	}catch(error){
		// return res.status(404).json({message:error.message});
		return res.status(404).send({message:error.message});
	}



}
const createClient = async(req,res)=>{
	const client = req.body;
	console.log(client)
	const newClient = new ClientMessage(client);
	try{
		await newClient.save();
		return res.status(201).json(newClient);
		// res.status(201).send(newClient);

	}catch(error){
		return res.status(409).json({message:error.message});
		// res.status(409).send({message: error.message});
	}
}

module.exports = {getClients,createClient};