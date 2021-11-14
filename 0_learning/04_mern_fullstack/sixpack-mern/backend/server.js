const app = require('./app');

const dotenv = require('dotenv');
const connectToDatabase = require('./config/database');

// handling uncaught exception
process.on("uncaughtException",(err)=>{
	console.log(`Error:${err.message}`);
	console.log(`Shutting down the server due to Uncaught Execption`);
	process.exit(1);
})




dotenv.config({path:'backend/config/config.env'});

connectToDatabase();

app.listen(process.env.PORT,()=>{
	console.log(`Server is running on PORT ${process.env.PORT}`);
});

// unhandled promise rejections

process.on("unhandledRejection",(err)=>{
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down server due to Unhandled Promise Rejection`);
	
	server.close(()=>{
		process.exit(1);
	});
});

