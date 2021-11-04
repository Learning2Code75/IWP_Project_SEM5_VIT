const mongo = require('./mongo');
const clientSchema = require('./schemas/client-schema');

const createClient = async ()=>{
	const client = {
		clientName:"client2",
		clientID:"client0002",
		clientWebsite:"client2.co.in",
		clientEmail:"client2@gmail.com",
		clientTelephone:"9876543210",
		clientSocialMedia:{
			clientInstagram:"client2Insta",
			clientFacebook:"client2Facebook",
			clientLinkedIn:"client2LinkedIn",
			clientTwitter:"client2Twitter"
		},
		clientAddress:"client2,street2 , city2 ,state2 , country2",
		salesPersonName:"salesperson1"
	}
	await new clientSchema(client).save();
}

const findClients = async()=>{
	const result = await clientSchema.find({});
	console.log("all clients:",result);
}

const findClientBySalesperson = async()=>{
	const result = await clientSchema.find({salesPersonName:"salesperson1"});
	console.log("salesperson1 client:",result);
}

// update one client based on client id
const updateClientByClientID = async()=>{
	await clientSchema.updateOne({
		clientID:"client0001"
	},{
		// update object from the client side to update
	})
}

const connectToMongoDB = async()=>{
	await mongo()
	.then(mongoose=>{
		try{
			console.log(`Connected to mongodb`)
			// createClient();
			// findClients();
			// findClientBySalesperson();
			// updateClientByClientID();

			

		}finally{
			// mongoose.connection.close();
		}
	})
}
connectToMongoDB();