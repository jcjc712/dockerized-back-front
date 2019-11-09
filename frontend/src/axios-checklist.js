import axios from "axios";

const instance = axios.create({
   baseURL: 'http://backend.test/'
});

export default instance;
