import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/',
});
api.defaults.withCredentials = true;

export default api;