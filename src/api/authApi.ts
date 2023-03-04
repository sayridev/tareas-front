import axios, { AxiosRequestConfig } from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

const authApi = axios.create({
    baseURL: VITE_API_URL
});

//Configurar interceptores
// headers:{
//     'Authorization': `Bearer ${token}` 
// }
authApi.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem('token')}`;
    }
    return config;
});

export default authApi;