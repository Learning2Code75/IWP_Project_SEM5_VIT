//own imports
const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncError');
const ApiFeatures = require('../utils/apifeatures');


//create product: -- manager
exports.createProduct = catchAsyncErrors( async(req,res,next)=>{
	const product = await Product.create(req.body);

	res.status(201).json({
		success:true,
		product
	});
});

// get all products(product catalogue) -- manager, salesperson,financier,warehouser
exports.getAllProducts =catchAsyncErrors( async(req,res)=>{
	const apiFeature = new ApiFeatures(Product.find(),req.query).search();
	
	// const products = await Product.find();
	const products = await apiFeature.query;

	res.status(201).json({
		success:true,
		products
	});	

});

//get only one product:
exports.getProductDetails = catchAsyncErrors( async(req,res,next)=>{
	const product = await Product.findById(req.params.id);

	if(!product){
		return next(new ErrorHandler("Product not found",404));
	}

	// console.log(product)
	res.status(200).json({
		success:true,
		product
	});

});

//update product -- manager, warehouser
exports.updateProduct =catchAsyncErrors( async(req,res,next)=>{
	let product = await Product.findById(req.params.id);

	if(!product){
		return next(new ErrorHandler("Product not found",404));
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
});

//delete product : -- manager, warehouser
exports.deleteProduct =catchAsyncErrors( async(req,res,next)=>{
	const product = await Product.findById(req.params.id);

	if(!product){
		return next(new ErrorHandler("Product not found",404));
	}

	await product.remove();

	res.status(200).json({
		success:true,
		message:"Product deleted successfully"
	})

});