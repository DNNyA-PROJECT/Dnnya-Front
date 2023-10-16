import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

const Conections = {
  get: async (url, config = {}) => {
    try {
      const response = await axiosInstance.get(url, config);
      return response;
    } catch (error) {
      throw error;
    }
  },

  post: async (url, data, config = {}) => {
    try {
      const response = await axiosInstance.post(url, data, config);
      return response;
    } catch (error) {
      throw error;
    }
  },

  put: async (url, data, config = {}) => {
    try {
      const response = await axiosInstance.put(url, data, config);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default Conections;
