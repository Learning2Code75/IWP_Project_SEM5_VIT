import ClientModal from '../models/clientModel.js'

export const getClients = async(req,res) =>{
	try{
		const clients = await ClientModal.find();
		res.status(200).json(ClientModal);
	}catch(err){
		res.status(404).json({message:error.message});
	}
}


export const createClient = () =>{
	const 
}