import axios from 'axios';

const PostsUrl = "http://192.168.0.106:5000/posts";
const ClientsUrl = "http://192.168.0.106:5000/clients";
const UsersUrl = "http://192.168.0.106:5000/loginRegister";
const ProductsUrl = "http://192.168.0.106:5000/products";

export const fetchPosts = ()=> axios.get(PostsUrl);
export const createPost = (newPost)=> axios.post(PostsUrl,newPost);

export const fetchClients = ()=> axios.get(ClientsUrl);
export const createClient = (newClient) => axios.post(ClientsUrl,newClient);

export const fetchUser = (username)=> axios.get(UsersUrl+'/'+username);
export const createUser = (newUser) => axios.post(UsersUrl,newUser);

export const fetchProducts = ()=> axios.get(ProductsUrl);
export const createProduct = (newProduct) => axios.post(ProductsUrl,newProduct);
