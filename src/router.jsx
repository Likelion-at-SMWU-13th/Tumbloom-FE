import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Splash from './components/onboarding/Splash'
import HomePage from './pages/HomePage'
import OnBoarding from './components/onboarding/OnBoarding'
import SignUp from './components/signup/SignUp'
import Login from './components/login/Login'
import StampAccess from './components/getStamp/StampAccess'
import GetStamp from './components/getStamp/GetStamp'
import QrScan from './components/getStamp/QrVer2'
import Coupon from './pages/Coupon'
import Stamp from './components/getStamp/StampAccess'
import CafeDetail from './components/CafeInfo/CafeDetail'
import CouponDetailPage from './pages/CouponDetailPage'
import MyPage from './pages/MyPage'
import Preference from './pages/Preference'
import CafeList from '@/components/CafeList/CafeList'
import FavoriteCafe from './pages/FavoriteCafe'
import Map from '@/components/Map/Map'
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
        path: '/couponDetail',
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
