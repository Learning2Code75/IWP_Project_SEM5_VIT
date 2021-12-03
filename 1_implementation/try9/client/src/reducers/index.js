import {combineReducers} from 'redux';

import posts from './posts'
import clients from './clients'
import users from './users'

export default combineReducers ({
	posts,
	clients,
	users
});