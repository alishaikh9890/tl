import React from 'react'

import {Alert} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { showNotification } from '../features/uiSlice'



const Notification = ({type, message}) => {

  const notification = useSelector((state)=> state.ui.notification)

  const dispatch = useDispatch()

  function handleClose(){
    dispatch(showNotification({open:false}))
  }

  return (
    <div>
     {notification.open && <Alert onClick={handleClose} severity={type} >{message}</Alert> }
    </div>
  )
}

export default Notification