import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import clientRoutes from './routes/clients.js';
import productRoutes from './routes/products.js';
import orderRoutes from './routes/orders.js';

const app = express();


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/clients',clientRoutes);
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);


const CONNECTION_URL = 'mongodb://localhost:27017/dlomtrynumber3';
const PORT = process.env.PORT || 6000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
	.then(()=> app.listen(PORT,()=> console.log(`Server running on port : ${PORT}`)))
	.catch((err)=> console.log(err.message));
