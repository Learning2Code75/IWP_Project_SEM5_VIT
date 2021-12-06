import axios from 'axios';

const PostsUrl = "http://localhost:5000/posts";
const ClientsUrl = "http://localhost:5000/clients";
const UsersUrl = "http://localhost:5000/loginRegister";
const ProductsUrl = "http://localhost:5000/products";
const OrdersUrl = "http://localhost:5000/orders";
 


export const fetchPosts = ()=> axios.get(PostsUrl);
export const createPost = (newPost)=> axios.post(PostsUrl,newPost);

export const fetchClients = ()=> axios.get(ClientsUrl);
export const createClient = (newClient) => axios.post(ClientsUrl,newClient);

export const loginUser = (user)=> axios.post(UsersUrl,user);
export const createUser = (newUser) => axios.post(UsersUrl,newUser);

export const fetchProducts = ()=> axios.get(ProductsUrl);
export const createProduct = (newProduct) => axios.post(ProductsUrl,newProduct);
export const updateProduct = (updateDetails) => axios.patch(ProductsUrl,updateDetails);

export const fetchOrders = ()=> axios.get(OrdersUrl);
export const createOrder = (newOrder) => axios.post(OrdersUrl,newOrder);
export const updateOrder = (id,updatedOrder)=> axios.patch(`${OrdersUrl}/${id}`,updatedOrder);
