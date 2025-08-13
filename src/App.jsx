import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Splash from './components/onboarding/Splash'

function App() {
  return (
    <div className='phone-frame'>
      <Outlet />
    </div>
  )
}

export default App
