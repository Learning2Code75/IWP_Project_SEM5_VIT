const mongoose = require('mongoose');

const reqString = {
	type: String,
	required: true
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
	salesPersonName:reqString
});

module.exports = mongoose.model('clients',clientSchema);