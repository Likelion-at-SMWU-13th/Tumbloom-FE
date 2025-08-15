import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import SignUp from './components/signup/SignUp'
import Login from './components/login/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
])
export default router
