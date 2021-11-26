import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    userFirstName:{
        type:String,
        required:[true,"Enter first name"]
    },
    userLastName:{
        type:String,
        required:[true,"Enter last name"]
    },
    userName:{
        type:String,
        required:[true,"Enter username"],
    },
    password:{
        type:String,
        required:[true,"Enter password"]
    },
    userEmail:{
        type:String,
        required:[true,"Enter email"]
    },
    userType: {
        type: String,
        required: [true, "Please Enter Type of User"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", userSchema);