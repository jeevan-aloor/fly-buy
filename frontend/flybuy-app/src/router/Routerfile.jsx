import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../components/Home'
import Cloths from '../components/Cloths'
import Watches from '../components/Watches'
import Shoes from '../components/Shoes'
import Cart from '../components/Cart'
import Checkout from '../components/Checkout'
import Singleproduct from '../components/Singleproduct'
import Login from '../components/Login-signup/Login'
import Womenwatch from '../components/Womenwatch'
import Menwatch from '../components/Menwatch'
// import CheckoutForm from '../components/Payment'
// import CheckoutForm from '../components/Payment'

function Routerfile() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cloth' element={<Cloths/>}/>
      <Route path='/shoes' element={<Shoes/>}/>
      <Route path='/watches' element={<Watches/>}/>
      <Route path='/carts' element={<Cart/>}/>
      <Route path='/checkout/:id' element={<Checkout/>}/>
      <Route path="/singleproduct/:id" element={<Singleproduct/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/womenwatch" element={<Womenwatch/>}/>
      <Route path="/menswatch" element={<Menwatch/>}/>
      {/* <Route path="/payment" element={<CheckoutForm/>}/> */}
    </Routes>
  )
}

export default Routerfile