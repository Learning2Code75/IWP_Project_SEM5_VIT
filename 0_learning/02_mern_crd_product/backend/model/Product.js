const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({
	name:{
		type:String,
		required: true
	},
	description:{
		type:String,
		required:true
	},
	imageurl:{
		type:String,
		required:true
	},
	price:{
		type:Number,
		required:true
	},
	isFeatured:{
		type:Boolean
	}
})


module.exports = mongoose.model('Product',productSchema);

// products collection in mongodb with doc schema as productSchema