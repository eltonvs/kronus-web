import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000/api'
    : 'https://kronus-api.herokuapp.com/api'

const api = axios.create({
  baseURL,
})

export default api
