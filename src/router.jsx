import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Splash from './pages/Splash'
import HomePage from './pages/HomePage'
import OnBoarding from './pages/OnBoarding'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import QrScan from './pages/QrScan'
import Coupon from './pages/Coupon'
import Stamp from './pages/StampAccess'
import CafeDetail from './pages/CafeDetail'
import CouponDetailPage from './pages/CouponDetailPage'
import MyPage from './pages/MyPage'
import Preference from './pages/Preference'
import CafeList from '@/pages/CafeList'
import FavoriteCafe from './pages/FavoriteCafe'
import Map from '@/pages/Map'
import ProfileShare from './pages/ProfileShare'

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
        path: '/stamp/:cafeId',
        element: <Stamp />,
      },
      {
        path: '/qr',
        element: <QrScan />,
      },
      {
        path: '/detail/:cafeId',
        element: <CafeDetail />,
      },
      {
        path: '/couponDetail/:couponId',
        element: <CouponDetailPage />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/favoriteCafe',
        element: <FavoriteCafe />,
      },
      {
        path: '/profileShare',
        element: <ProfileShare />,
      },
      {
        path: '/preference',
        element: <Preference />,
      },
      {
        path: '/map',
        element: <Map />,
      },
      {
        path: '/cafelist',
        element: <CafeList />,
      },
    ],
  },
])
export default router
