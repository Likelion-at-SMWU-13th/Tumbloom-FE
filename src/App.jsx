import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Splash from './pages/Splash'
import OnBoarding from './pages/OnBoarding'
import SignUp from './pages/SignUp'

function App() {
  return (
    // <div className='phone-frame'>
    <div style={{ width: '100%' }}>
      <Outlet />
    </div>
  )
}

export default App
