import React from 'react'
import Navbar from './components/navbar/Navbar'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './router/Router'


const App = () => {
  return (
   <RouterProvider router={myRoutes}></RouterProvider>
  )
}

export default App
