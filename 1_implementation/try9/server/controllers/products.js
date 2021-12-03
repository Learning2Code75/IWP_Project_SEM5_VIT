const ProductMessage = require('../models/productMessage.js');


const getProducts =async (req,res)=>{
	try{
		const products = await ProductMessage.find();
		console.log(products);

		// return res.status(200).json(clients);
		return res.status(200).send(products);
	}catch(error){
		// return res.status(404).json({message:error.message});
		return res.status(404).send({message:error.message});
	}



}
const createProduct = async(req,res)=>{
	const product = req.body;
	console.log(product)
	const newProduct = new ProductMessage(product);
	try{
		await newProduct.save();
		return res.status(201).json(newProduct);
		// res.status(201).send(newClient);

	}catch(error){
		return res.status(409).json({message:error.message});
		// res.status(409).send({message: error.message});
	}
}

module.exports = {getProducts,createProduct};