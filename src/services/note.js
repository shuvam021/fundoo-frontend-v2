import axios from 'axios'

let token = `Bearer ${localStorage.getItem('access')}`

const noteInstance = axios.create({
	baseURL: 'http://localhost:8000/api',
	timeout: 5000,
	// headers: { Authorization: token },
	headers: {
		Authorization: token ? token : null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
})

export async function postNoteAPI(data) {
	return await noteInstance.post('/note/', data)
}

export async function getNoteAPI() {
	return await noteInstance.get('/note/')
}

export async function updateNoteAPI(id, data) {
	return await noteInstance.put(`/note/${id}/`, data)
}

export async function updateNoteArchiveAPI(id, data) {
	return await noteInstance.put(`/note-archive/${id}/`, data)
}

export async function updateNoteColorAPI(id, data) {
	return await noteInstance.put(`/update-color/${id}/`, data)
}

noteInstance.interceptors.request.use(
	config => {
		console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date().getTime()}`)
		return config
	},
	err => Promise.reject(err),
)

export { noteInstance }
