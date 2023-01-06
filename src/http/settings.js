import axios from 'axios'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: 'http://erdent001.pythonanywhere.com'
})

instance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('nurbek-token'));
  if (token) {
      config.headers.Authorization = `Token ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

export default instance;