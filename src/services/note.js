import axios from "axios";

const noteInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000,
    headers: {Authorization: `"Bearer ${localStorage.getItem('access')}`}
});

export async function postNoteAPI(data) {
    return await noteInstance.post('/api/note/', data)
}

export async function getNoteAPI(){
    return await noteInstance.get('/api/note/')
}

export async function updateNoteAPI(id, data){
    return await noteInstance.put(`/api/note/${id}/`, data)
}

export async function updateNoteArchiveAPI(id, data){
    return await noteInstance.put(`/api/note-archive/${id}/`, data)
}

export async function updateNoteColorAPI(id, data){
    return await noteInstance.put(`/api/update-color/${id}/`, data)
}


noteInstance.interceptors.request.use(
    config => {
        console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date().getTime()}`);
        return config;
    }, err => Promise.reject(err));