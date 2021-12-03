const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const pdf = require("html-pdf");
const cors = require('cors');

const app = express();


const pdfTemplate = require('./documents');
const postRoutes =  require('./routes/posts.js');
const clientRoutes = require('./routes/clients.js');
const loginRegisterRoutes = require('./routes/loginRegister.js');
const productRoutes = require('./routes/products.js');
 
const port = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb://localhost:27017/iwptry9"



app.use(cors());
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(bodyParser.json({limit:"30mb",extended:true}))


app.use('/posts',postRoutes);
app.use('/clients',clientRoutes);
app.use('/loginRegister',loginRegisterRoutes);
app.use('/products',productRoutes);

let pdfName = "";

// [POST]- pdf generation and fetching of the data
app.post("/create-pdf",(req,res)=>{
	pdfName = req.body.name;
	pdf.create(pdfTemplate(req.body),{})
	.toFile(`${pdfName}.pdf`,(err)=>{
		if(err){
			res.send(Promise.reject());
		}
		res.send(Promise.resolve());
	});
})

// [GET] - send the generated pdf to the client
app.get("/fetch-pdf",(req,res)=>{
	res.sendFile(`${__dirname}/${pdfName}.pdf`)
})


mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{app.listen(port,()=>{
		console.log(`Listening on port : ${port}`)
	})
})
.catch((err)=>console.log(err.message));





