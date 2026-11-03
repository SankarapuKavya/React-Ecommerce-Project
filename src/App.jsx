import React from 'react'
import Homepage from './pages/Homepage'
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from './pages/AdminDashboard'
import AddedProducts from "./pages/AddedProducts"
import UserDashboard from './pages/UserDashboard'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Orders from './pages/Orders'
import ProductDetail from './pages/ProductDetail'
import {Routes, Route} from "react-router-dom"
const App = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path="/addedproducts" element={<AddedProducts/>}/>
        <Route path='/usersignup' element={<UserSignup/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/userdashboard' element={<UserDashboard/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/productdetail/:id' element={<ProductDetail/>}/>
      </Routes> 
    </>
  )
}

export default App