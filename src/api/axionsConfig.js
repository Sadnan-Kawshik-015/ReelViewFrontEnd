import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // correct format
});

export default api;
