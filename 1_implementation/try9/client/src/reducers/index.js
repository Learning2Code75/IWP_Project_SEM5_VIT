import {combineReducers} from 'redux';

import posts from './posts'
import clients from './clients'
import users from './users'
import products from './products'
import orders from './orders'
 
export default combineReducers ({
	posts,
	clients,
	users,
	products,
	orders
});