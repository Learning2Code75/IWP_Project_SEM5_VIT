const mongo = require('./mongo');
const userSchema = require('./schemas/user-schema');

const insertUser = async()=>{
	const user = {
				email:'manager1@gmail.com',
				username: 'manager1',
				password:'mangerpass1',
				type:'manager'
	}
	await new userSchema(user).save();
}

const findUsers = async()=>{
	const result = await userSchema.find({});
	console.log('Result',result);
}

const findUserByType = async()=>{
	const result = await userSchema.findOne({
		type:'manager'
	});
	console.log('User by type', result);
}

const findUsersByType = async()=>{
	const result = await userSchema.find({
		type:'manager'
	});
	console.log('Users by type:',result);
}

// update user details: 
const updateUserbyUsername = async()=>{
	await userSchema.updateOne({
		username:"manager2"
	},{
		username:"manager3"
	})
}

const updateUsersbyType = async()=>{
	await userSchema.updateMany({
		type:"manager"
	},{
		email:"manager@manager.com"
	});
}


const connectToMongoDB = async ()=>{
	await mongo()
	.then((mongoose)=>{
		try{
			console.log(`Connected to mongodb`);

			// insertUser();
			// findUsers();
			// findUserByType();
			// findUsersByType();
			// updateUserbyUsername();
			updateUsersbyType();



		}finally{
			// mongoose.connection.close();
		}
	})
}
connectToMongoDB();