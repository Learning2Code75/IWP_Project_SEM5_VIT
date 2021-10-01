//named imports
const mongoose = require('mongoose');

//own imports
const Product = require('../model/Product');

const getProducts = async(req,res,next)=>{
	let products;
	try{
		products = await Product.find();
	}catch(err){
		console.log(err);
		return next();
	}

	if(!products){
		return res.status(404).json({message:'No product found'})
	}

	res.status(200).json({products:products});
}

const getProductById = async(req,res,next)=>{
	const productId = req.params.id;
	let product; 
	try{
		product = await Product.findById(productId);
	}catch(err){
		console.log(err);
		return next();
	}
	if(!product){
		res.status(404).json({message:"No product found with the ID provided"});
	}

	res.status(201).json({product:product});

}

const addProduct = async(req,res,next)=>{
	let product;
	try{
		product= new Product({
			name:req.body.name,
			description:req.body.description,
			imageurl:req.body.imageurl,
			price:req.body.price,
			isFeatured:req.body.isFeatured
		})

		product = await product.save();
	}catch(err){
		console.log(err)
		return next();
	}

	res.status(201).json({product:product});
};


const updateProduct = async(req,res,next)=>{
	let productId = req.params.id;

	const {name,description,price,imageurl,isFeatured} = req.body;

	let product;
	let newprod;

	try{
		product = await Product.findByIdAndUpdate(productId,{
			name,
			description,
			price,
			imageurl,
			isFeatured
		});
		newprod =await product.save();

	}catch(err){
		console.log(err);
		return next();
	}

	// try{
	// 	newprod =await product.save();
	// }catch(err){
	// 	console.log("Saving Failed",err);
	// 	return next();
	// }

	res.status(200).json({newprod});
}


const deleteProduct = async(req,res,next)=>{
	const productId = req.params.id;
	let product; 

	try{
		product = await Product.findByIdAndRemove(productId);

	}catch(err){
		console.log(err);
		return next(err);
	}

	if(!product){
		return res.status(400).json({message:"product not deleted"});
	}

	res.status(200).json({message:"product deleted"});
}


exports.getProducts = getProducts;
exports.addProduct = addProduct;
exports.getProductById = getProductById;
exports.updateProduct = updateProduct;
exports.deleteProduct= deleteProduct;