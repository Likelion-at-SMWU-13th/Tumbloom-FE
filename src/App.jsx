import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

function App() {
  return (
    <div className='phone-frame'>
      <Header title='스탬프 적립하기' />
      <Footer />
      <Outlet />
    </div>
  )
}

export default App
