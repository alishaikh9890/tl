import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../features/cartSlice'

const Cart = () => {

    const cart = useSelector(state => state.cart.cartList)



    const dispatch = useDispatch()
  return (
    <div className='transition-all duration-300 ease-in-out'>
          <div className=" max-w-7xl mx-auto my-10">
                    <div className="flex gap-5 flex-wrap justify-center">
                        {
                           cart.map((ele) => (
                        <div key={ele.id} className="shadow p-2 w-full flex bg-slate-400 gap-4 justify-between">
                            <img className='border rounded-2xl h-[100px] w-[100px]' src={ele.image} alt="" />
                            <div>
                                <h2 className='text-xl font-bold'>{ele.price}</h2>
                                <h1>{ele.title}</h1>
                                <h2 className='text-xl font-bold'>{ele.quantity}</h2>
                            </div>
                            <div>
                                <button onClick={() => dispatch(removeCart(ele.id))} className='bg-red-600 text-white py-1 px-3'>X</button>
                            </div>
                           
                        </div>
                            ))
                        }
                    </div>
                </div>
    </div>
  )
}

export default Cart