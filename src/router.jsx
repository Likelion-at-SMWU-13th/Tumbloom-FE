import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import SignUp from './components/signup/SignUp'
import Login from './components/login/Login'
import StampAccess from './components/getStamp/StampAccess'
import GetStamp from './components/getStamp/GetStamp'
import Coupon from './pages/Coupon'

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
      {
        path: '/coupon',
        element: <Coupon />,
      },
    ],
  },
])
export default router
