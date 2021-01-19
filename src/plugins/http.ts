import Axios from 'axios';

const http = Axios.create({
  baseURL: '/api'
});

export default http;
