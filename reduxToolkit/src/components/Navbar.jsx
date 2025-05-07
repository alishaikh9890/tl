import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/authSlice'
import { showCart } from '../features/cartSlice'

const Navbar = () => {

    const dispatch = useDispatch()

    let cartLength = useSelector(state=> state.cart.cartLength)
    let auth = useSelector(state=> state.auth.auth)
    console.log(auth)

  return (
    <div>
        <div className="shadow p-3">
            <div className="max-w-7xl mx-auto flex justify-between">
                <h1 className="text-2xl font-bold">Showp</h1>
                    <div className='flex gap-2'>
                        <button onClick={()=> dispatch(showCart())} className=' px-3 rounded-2xl border hover:bg-slate-50'>Cart: {cartLength} 👜</button>
                        <button onClick={()=> dispatch(logout())} className=' bg-slate-600 rounded-full border hover:bg-red-700'>
                            <img className='rounded-full w-10' src={auth.img} alt="" />
                        </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar