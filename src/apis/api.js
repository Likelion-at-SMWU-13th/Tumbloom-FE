import axios from 'axios'
const baseURL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

const refreshApi = axios.create({
  baseURL,
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
    const original = err.config

    if (err.response?.status === 401 && !original._retry) {
      original._retry = true
      try {
        const { data } = await refreshApi.post(`/api/auth/refresh`)
        const newToken = data.accessToken ?? data.data?.accessToken
        if (!newToken) throw new Error('토큰 갱신에 실패했습니다.')

        localStorage.setItem('accessToken', newToken)

        original.headers.Authorization = `Bearer ${data.accessToken}`
        return api(original)
      } catch (e) {
        localStorage.removeItem('accessToken')
        window.location.href = '/login'
      }
    }
    return Promise.reject(err)
  },
)

export default api
