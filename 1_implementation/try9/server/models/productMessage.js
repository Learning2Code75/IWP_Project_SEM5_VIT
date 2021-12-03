const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
	productName:String,
	productSKU:String,
	productDescription:String,
	productMRP:Number,
	productImage:String,
	productCategory:String,
	productStock:Number,
	productHSN:String,
	productGSTPercent:Number
})

const ProductMessage = mongoose.model('ProductMessage',productSchema);

module.exports = ProductMessage;