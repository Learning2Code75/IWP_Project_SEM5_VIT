import React,{useState} from 'react';
import FileBase from 'react-file-base64';
// global state management
import {useDispatch} from 'react-redux';

import {createPost} from '../../actions/posts';


const Form = ()=>{

	const dispatch = useDispatch();

	const [postData,setPostData] = useState({
		creator:'',
		title:'',
		message:'',
		tags:'',
		selectedFile:'',
	});
	const handleSubmit =(e)=>{
		e.preventDefault();

		dispatch(createPost(postData))
	}
	const clear =()=>{
		setPostData({
		creator:'',
		title:'',
		message:'',
		tags:'',
		selectedFile:'',
		})
	}

	return(
		<form autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
			<h6>Creating Post</h6>
			<input type="text" placeholder="creator" name="creator" value={postData.creator} onChange={(e)=> setPostData({...postData,creator:e.target.value})} />
			<input type="text" placeholder="title" name="title" value={postData.title} onChange={(e)=> setPostData({...postData,title:e.target.value})} />
			<input type="text" placeholder="message" name="message" value={postData.message} onChange={(e)=> setPostData({...postData,message:e.target.value})} />
			<input type="text" placeholder="tags" name="tags" value={postData.tags} onChange={(e)=> setPostData({...postData,tags:e.target.value})} />
			<div>
				<FileBase
					type="file"
					multiple={false}
					onDone = {({base64})=> setPostData({...postData,selectedFile:base64})}
				 />	
			</div>

			<input type="submit" />
			<button onClick={clear}>Clear</button>
		</form>
	);
}

export default Form;