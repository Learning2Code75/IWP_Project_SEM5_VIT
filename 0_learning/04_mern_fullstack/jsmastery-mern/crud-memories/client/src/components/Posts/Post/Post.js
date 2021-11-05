import React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAl';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



import useStyles from './styles';
const Post = ()=>{
	const classes = useStyles();
	return(
		<Card className={classes.card}>
			<CardMedia className="">
				
			</CardMedia>
		</Card>
	);
}

export default Post;