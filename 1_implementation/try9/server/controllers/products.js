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


const updateProduct = async(req,res)=>{
	
	console.log(req.body);

	const updateProductSKU = req.body.prodSKU;
	let addQty = req.body.prodQty;
	// const updateChoice = req.body.updateChoice;
	
	// if(updateChoice === 'Remove'){
	// 	addQty = parseInt('-'+addQty);
	// }

	// const prod = await ProductMessage.find({productSKU:updateProductSKU});
	// console.log(prod);
	// if(await !prod){
	// 	return res.status(404).send("No product with provided SKU");
	// }

	// console.log("addQty:",addQty)
	// console.log("typeof QTY",typeof(addQty))

	// console.log("productStock",prod.productStock);
	// console.log("productStock type", await typeof(prod.productStock))

	// const newQty = parseInt(addQty) + await parseInt(prod.productStock);
	// console.log("newQty:",newQty)

	const updatedProduct = await ProductMessage.findOneAndUpdate({productSKU:updateProductSKU},{productStock:addQty},{new:true});
	console.log(updatedProduct)
	return res.status(200).json(updatedProduct);
	

}
module.exports = {getProducts,createProduct,updateProduct};