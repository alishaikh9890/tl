import { useEffect, useRef, useState } from 'react'

import './App.css'
import Auth from './components/Auth'
import Products from './components/Products'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './components/Cart'
import Notification from './components/Notification'
import { showNotification } from './features/uiSlice'
import { fetchData, sendCartData } from './features/cartActions'

function App() {
  const isFirstRender = useRef(true);

  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)
  let auth = useSelector((state) => state.auth.auth)
  let show = useSelector((state) => state.cart.showCart)

  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchData())
}, [dispatch])

  useEffect(() => {

    if(isFirstRender.current)
    {
      isFirstRender.current = false;
      return;
    }
    dispatch(sendCartData(cart))
  }, [cart])


  return (
    <div>
     { notification && <Notification type={notification.type} message={notification.message} />}
      {!auth && <Auth />}
      {auth && <Products />}
      {auth && show && <Cart />}


    </div>
  )
}

export default App
