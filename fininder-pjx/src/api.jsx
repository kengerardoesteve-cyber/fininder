import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api',
});

export const getServices = () => api.get('/services');
export const getServiceById = (id) => api.get(`/services/${id}`);
export const getCategories = () => api.get('/categories');

export default api;


