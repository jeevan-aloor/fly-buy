import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../components/Home'
import Cloths from '../components/Cloths'
import Watches from '../components/Watches'
import Shoes from '../components/Shoes'

function Routerfile() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cloth' element={<Cloths/>}/>
      <Route path='/shoes' element={<Shoes/>}/>
      <Route path='/watches' element={<Watches/>}/>
    </Routes>
  )
}

export default Routerfile