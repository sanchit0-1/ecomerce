import Home from '../pages/Home'
import Cart from '../pages/Cart'
import About from '../pages/About'
import Login from '../pages/Login'
import Product from '../pages/Product'

import { Route, Routes } from 'react-router-dom'

const Mainroutes = () => {
  return (
    <div className='  '>
    <Routes >
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/cart" element = {<Cart/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path = '/product' element = {<Product/>} />
    </Routes>
    </div>
  )
}

export default Mainroutes