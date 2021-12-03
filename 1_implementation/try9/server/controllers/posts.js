const PostMessage = require('../models/postMessage.js');


const getPosts = async(req,res)=>{
	
	try{
		const postMessages = await PostMessage.find()
		console.log(postMessages)

		res.status(200).json(postMessages);
	}catch(error){
		res.status(404).json({message: error.message});
	}

	res.send("Get POSTS")

}

const createPost = async(req,res)=>{
	const post = req.body;

	const newPost = new PostMessage(post);

	try{	
		await newPost.save();
		res.status(201).json(newPost);

	}catch(err){
		res.status(409).json({message:error.message});
	}


}

module.exports = {getPosts,createPost}