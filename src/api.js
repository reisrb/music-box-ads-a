import axios from 'axios';

const api = axios.create({
  baseURL: "https://seuipdomock.mockapi.io/music-box" // sua url do mockiapi
})

export default api;