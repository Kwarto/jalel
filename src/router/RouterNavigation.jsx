import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'
import Categories from '../pages/Categories/Categories'
import Checkout from '../pages/Checkout/Checkout'
import Cart from '../pages/Cart/Cart'
import OrderReceived from '../pages/OrderReceived/OrderReceived'
import Account from '../pages/Account/Account'
import MyAccount from '../accoutlist/MyAccount/MyAccount'
import Login from '../accoutlist/Login/Login'
import Register from '../accoutlist/Register/Register'
import ErrorPage from '../pages/Error/ErrorPage'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
function RouterNavigation() {
  return (
    <>
      <Router>
        <NavBar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='categories' element={<Categories />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='cart' element={<Cart />} />
            <Route path='order_received' element={<OrderReceived />} />
            <Route path='error-page' element={<ErrorPage />} />
            <Route path='account' element={<Account />} />
            <Route path='account/my-account' element={<MyAccount />} />
            <Route path='account/login' element={<Login />} />
            <Route path='account/register' element={<Register />} />
         </Routes>
         <Footer />
      </Router>
    </>
  )
}

export default RouterNavigation