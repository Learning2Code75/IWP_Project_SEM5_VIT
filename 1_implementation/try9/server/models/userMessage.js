const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
	username:String,
	email:String,
	firstName:String,
	lastName:String,
	password:String,
	role:String
})

const UserMessage = mongoose.model('UserMessage',userSchema);

module.exports = UserMessage;