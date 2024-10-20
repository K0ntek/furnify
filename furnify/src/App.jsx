import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/index/Index'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Product from './pages/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Navbar/>

      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/collections' element={<Index/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path={`/product/:id`} element={<Product/>} />
      </Routes>

      <div className="p-3">
      <Footer/>
      </div>
    </div>
  )
}

export default App
