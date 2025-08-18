import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Splash from './components/onboarding/Splash'
import HomePage from './pages/HomePage'
import OnBoarding from './components/onboarding/OnBoarding'
import SignUp from './components/signup/SignUp'
import Login from './components/login/Login'
import StampAccess from './components/getStamp/StampAccess'
import GetStamp from './components/getStamp/GetStamp'
import QrScan from './components/getStamp/QrScan'
import Coupon from './pages/Coupon'
import Stamp from './components/getStamp/StampAccess'
import CafeDetail from './components/CafeInfo/CafeDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Splash />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/onb',
        element: <OnBoarding />,
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
      {
        path: '/stamp',
        element: <Stamp />,
      },
      {
        path: '/qr',
        element: <QrScan />,
      },
      {
        path: '/detail',
        element: <CafeDetail />,
      },
    ],
  },
])
export default router
