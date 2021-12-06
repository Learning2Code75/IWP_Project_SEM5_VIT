const UserMessage = require('../models/userMessage.js');


const loginUser =async (req,res)=>{

	try{
		console.log(req.body)
		const usernameToFind = req.body.loginData.username;
		const user = await UserMessage.find({username:usernameToFind});
		console.log(user[0]);

		// return res.status(200).json(clients);
		return res.status(200).json(user);
	}catch(error){
		// return res.status(404).json({message:error.message});
		return res.status(404).send({message:error.message});
	}



}
const createUser = async(req,res)=>{
	const user = req.body;
	console.log(user)
	const newUser = new UserMessage(user);
	try{
		await newUser.save();
		return res.status(201).json(newUser);
		// res.status(201).send(newClient);

	}catch(error){
		return res.status(409).json({message:error.message});
		// res.status(409).send({message: error.message});
	}
}

module.exports = {loginUser,createUser};