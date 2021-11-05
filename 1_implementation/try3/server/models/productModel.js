import mongoose from 'mongoose';


const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  productDescription: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  productPrice: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  productImage:String,
  productCategory: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  productStock: {
    type: Number,
    required: [true, "Please Enter product Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);