import React from 'react';

const Post = ({post})=>{
	const {_id,title,message,creator,tags,selectedFile} = post;
	return(
		<div className="fDCard">
			<img src={selectedFile} />
			<p>{title}</p>
			<p>{message}</p>
			<p>{creator}</p>
			<p>{tags}</p>


		</div>	
	);
}

export default Post;