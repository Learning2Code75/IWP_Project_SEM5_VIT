const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

const pdf = require("html-pdf");
const cors = require('cors');

const app = express();


const pdfTemplate = require('./documents')


const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

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



app.listen(port,()=>{
	console.log(`Listening on port : ${port}`)
})