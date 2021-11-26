import mongoose from 'mongoose';
const reqString = {
	required:true,
	type:String
}

const clientSchema = mongoose.Schema({
	clientName:reqString,
	clientID:reqString,
	clientWebsite:reqString,
	clientEmail:reqString,
	clientTelephone:reqString,
	clientSocialMedia:{
		clientInstagram:reqString,
		clientFacebook:reqString,
		clientLinkedIn:reqString,
		clientTwitter:reqString
	},
	clientAddress:reqString,
	salesPersonName:reqString,
	
	createdAt:{
		type:Date,
		default:new Date()
	}
});

const ClientModel = mongoose.model('clients',clientSchema);
export default ClientModel;