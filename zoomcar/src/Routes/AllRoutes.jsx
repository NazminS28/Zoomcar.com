import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landing } from '../Components/Landing'
import { Login } from '../Pages/Login'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <Landing/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/bah' element={ <h1>Become a Host</h1> }/>
    </Routes>
  )
}
