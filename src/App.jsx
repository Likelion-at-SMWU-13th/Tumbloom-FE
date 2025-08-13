import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Splash from './components/onboarding/Splash'
import OnBoarding from './components/onboarding/OnBoarding'

function App() {
  return (
    <div className='phone-frame'>
      <OnBoarding />
      <Outlet />
    </div>
  )
}

export default App
