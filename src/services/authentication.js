import axios from "axios";

const auth = axios.create({
    baseURL: 'http://localhost:8000/api'
});

export const loginApi = async (obj) => {
    return await auth.post('/login/', obj)
}

export const signUpAPI = async (obj)=>{
    return await auth.post( '/auth/register/', obj)
}

auth.interceptors.request.use(
    config => {
        console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date().getTime()}`);
        return config;
    }, err => Promise.reject(err));

