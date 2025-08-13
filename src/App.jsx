import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header'

function App() {
  return (
    <div className='phone-frame'>
      <Header title='스탬프 적립하기' />
      <Outlet />
    </div>
  )
}

export default App
