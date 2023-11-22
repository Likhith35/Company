import React from 'react'
import './Globall.css'
import Signup from './Signup'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>
    {/* <Login/> */}
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App