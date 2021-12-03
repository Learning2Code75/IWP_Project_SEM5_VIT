import React from 'react';
import Post from './Post/Post';

// state management
import {useSelector} from 'react-redux';


const Posts = ()=>{
	const posts = useSelector((state)=> state.posts);
	console.log(posts);

	return(
		<>
			{!posts.length ? "Loading...":(
				<div className="functionalityDashboard">
					{posts.map((post)=>(
						<div key={post._id} >
							<Post post={post} />
						</div>
					))}
				</div>
			)}
{/*			<div>
				<h1>Posts</h1>
				<Post/>
				<Post/>
				<Post/>
			</div>*/}
		</>
	);
}

export default Posts;