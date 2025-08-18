import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import SignUp from './components/signup/SignUp'
import Login from './components/login/Login'
import StampAccess from './components/getStamp/StampAccess'
import GetStamp from './components/getStamp/GetStamp'
import QrScan from './components/getStamp/QrScan'

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
        path: '/stamp',
        element: <StampAccess />,
      },
      {
        path: '/getstamp',
        element: <GetStamp />,
      },
      {
        path: '/qr',
        element: <QrScan />,
      },
    ],
  },
])
export default router
