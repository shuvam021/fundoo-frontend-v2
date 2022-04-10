import axios from "axios";

const auth = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

export const loginApi = async (obj) => {
    return await auth.post('/api/login/', obj)
}

auth.interceptors.request.use(
    config => {
        console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date().getTime()}`);
        return config;
    }, err => Promise.reject(err));

// export const userSignUp = async (obj)=>{
//     return await axios.post(BASE_URI + 'api/auth/register/', obj)
// }
