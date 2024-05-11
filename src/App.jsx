import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ToastContainer } from 'react-toastify'

 function App() {

  return (
<>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/signup" element={<Signup />}/>
</Routes>
<ToastContainer/>

</>
  )
}

export default App
