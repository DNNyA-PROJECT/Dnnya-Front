import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/Auth/register',
});
api.defaults.withCredentials = true;

export default api;