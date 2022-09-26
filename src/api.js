import axios from 'axios';

const api = axios.create({
  baseURL: "" // sua url do mockiapi
})

export default api;