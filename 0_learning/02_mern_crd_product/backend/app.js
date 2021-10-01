// named imports
const mongoose = require('mongoose');
const express = require('express');
const app = express();

//own imports:

const productRoutes = require('./routes/product-routes');


// middleware - dynamic routing also
app.use(express.json());

app.use((req,res,next)=>{
	next();
})
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","GET,PATCH,POST,DELETE");
  next();
});

app.use('/products',productRoutes);

// connectoins and port
mongoose.connect("mongodb://localhost:27017/mern_crd_product",{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
	console.log("mongodb connected")
	app.listen(5000)})
.then((err)=>console.log(err));


