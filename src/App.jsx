import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import {Home} from './pages/Home'
import { Movies } from './pages/Movies'
import { Login } from './pages/Login'
import { Footer } from './components/Footer'
import { PrivateRoute } from './components/PrivateRoute'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={
          <PrivateRoute><Movies />
          </PrivateRoute>}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
