//own imports
const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');


//create product: -- manager
exports.createProduct = async(req,res,next)=>{
	const product = await Product.create(req.body);

	res.status(201).json({
		success:true,
		product
	});
}

// get all products(product catalogue) -- manager, salesperson,financier,warehouser
exports.getAllProducts = async(req,res)=>{
	const products = await Product.find();
	res.status(201).json({
		success:true,
		products
	});	

}

//get only one product:
exports.getProductDetails = async(req,res,next)=>{
	const product = await Product.findById(req.params.id);

	if(!product){
		// return res.status(500).json({
		// 	success:false,
		// 	message:"Product not found"
		// })

		return next(new ErrorHandler("Product not found",404));
	}

	// console.log(product)
	res.status(200).json({
		success:true,
		product
	})

}

//update product -- manager, warehouser
exports.updateProduct = async(req,res,next)=>{
	let product = await Product.findById(req.params.id);

	if(!product){
		return res.status(500).json({
			success:false,
			message:"Product not found"
		});
	}
	product = await Product.findByIdAndUpdate(req.params.id,req.body,{
		new:true,
		runValidators:false,
		useFindAndModify:false
	})
	res.status(200).json({
		success:true,
		product
	})
}

//delete product : -- manager, warehouser
exports.deleteProduct = async(req,res,next)=>{
	const product = await Product.findById(req.params.id);

	if(!product){
		return res.status(500).json({
			success:false,
			message:"Product not found"
		});
	}

	await product.remove();

	res.status(200).json({
		success:true,
		message:"Product deleted successfully"
	})

}