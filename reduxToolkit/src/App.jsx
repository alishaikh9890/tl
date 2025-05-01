import { useState } from 'react'

import './App.css'
import Auth from './components/Auth'
import Products from './components/Products'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './components/Cart'

function App() {


  const dispatch = useDispatch()

  let auth = useSelector((state) => state.auth.auth)
  let show = useSelector((state) => state.cart.showCart)

  console.log(show)


  return (
    <>
     {!auth && <Auth/>} 
     {auth && <Products/>} 
     { show && <Cart/>}
    </>
  )
}

export default App
