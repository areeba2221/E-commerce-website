import API from './axios';

// export const getProducts = () => API.get('/products');
export const getProducts = (query = "") => API.get(`/products${query}`);
export const getProduct = (id) => API.get(`/products/${id}`);

export const getCategories = () => API.get('/products/categories');

