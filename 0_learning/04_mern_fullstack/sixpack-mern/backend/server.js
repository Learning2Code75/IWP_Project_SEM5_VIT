const app = require('./app');

const dotenv = require('dotenv');
const connectToDatabase = require('./config/database');

dotenv.config({path:'backend/config/config.env'});
connectToDatabase();
app.listen(process.env.PORT,()=>{
	console.log(`Server is running on PORT ${process.env.PORT}`);
});
