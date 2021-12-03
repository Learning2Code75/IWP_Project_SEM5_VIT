const mongoose = require('mongoose');


const clientSchema = mongoose.Schema({
	clientCompanyName:String,
	clientContactPersonName:String,
	clientAddress:String,
	clientGST:String,
	clientPhoneNumber:String,
	clientDiscountRate:Number,
	modeTermsOfPayment:String,
	clientEmail:String,
	clientWebsite:String,
	clientInstagram:String,
	clientFacebook:String,
	clientLinkedIn:String,
	clientTwitter:String,
	salespersonName:String
})

const ClientMessage = mongoose.model('ClientMessage',clientSchema);

module.exports = ClientMessage;