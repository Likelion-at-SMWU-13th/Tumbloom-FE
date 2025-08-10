import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='phone-frame'>
      <Outlet />
    </div>
  )
}

export default App
