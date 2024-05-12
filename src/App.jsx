import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'

 function App() {

  return (
<>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/signup" element={<Signup />}/>
  <Route path="/home" element={<Home />}/>

</Routes>
<ToastContainer/>

</>
  )
}

export default App
