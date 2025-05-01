import { useEffect, useRef, useState } from 'react'

import './App.css'
import Auth from './components/Auth'
import Products from './components/Products'
import { useDispatch, useSelector } from 'react-redux'
import Cart from './components/Cart'
import Notification from './components/Notification'
import { showNotification } from './features/uiSlice'

function App() {
  const isFirstRender = useRef(true);

  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)
  let auth = useSelector((state) => state.auth.auth)
  let show = useSelector((state) => state.cart.showCart)

  const dispatch = useDispatch()

  useEffect(() => {

    if(isFirstRender.current)
    {
      isFirstRender.current = false;
      return;
    }
    const sendRequest = async () => {

      dispatch(showNotification({type:"warning", message: "Pending the Request...!", open :true}))
      
      const res = await fetch('https://redux-addtocart-default-rtdb.firebaseio.com/cartList.json',
        {
          method: "PUT",
          body: JSON.stringify(cart)
        })
        const data = await res.json()
        dispatch(showNotification({type:"success", message: "Sending Data Successfull...!", open :true}))
      }
      sendRequest().catch((err)=> {
        dispatch(showNotification({type:"error", message: "Sending request failed...!", open :true}))
    })
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
