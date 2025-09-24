import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response?.status === 401) {
      try {
        const { data } = await axios.get(`/api/auth/refresh`, {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        })
        localStorage.setItem('accessToken', data.accessToken)

        err.config.headers.Authorization = `Bearer ${data.accessToken}`
        return api(err.config)
      } catch {
        localStorage.removeItem('accessToken')
        window.location.href = '/login'
      }
    }
    return Promise.reject(err)
  },
)

export default api
