import axios from 'axios';

const axiosInstance = axios.create();
axiosInstance.defaults.timeout = 50000;

export { axiosInstance };
