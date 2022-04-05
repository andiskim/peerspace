import axios from 'axios';

const BASE_URL = 'https://picsum.photos/'
const TIMEOUT_IN_MS = 20000;

const headers = {
  'Content-Type': 'application/json',
};
const api = axios.create({
  baseURL: BASE_URL,
  headers,
  timeout: TIMEOUT_IN_MS,
});

export default api;
