import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../features/cartSlice'
import { showAlert } from '../features/alertSlice'

const Cart = () => {


 let cart= useSelector(state=> state.cart.cartList)

 const dispatch = useDispatch()


 function handleRemove(id){
    dispatch(removeCart(id))
    dispatch(showAlert({message:"Item Removed...!", color:"red", status:true}))
 }
  return (
       <div>
           <div className="max-w-7xl mx-auto p-2 mt-5">
               <div className="flex flex-wrap gap-3">
                   {
                       cart.map((ele) => (
                           <div key={ele.id} className="shadow rounded p-2 w-auto">
                               
                               <div className="max-w-sm flex bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-slate-800 dark:border-slate-700">
                                   <a href="#">
                                       <img className=" rounded-t-lg h-[200px] w-[200px]" src={ele.image} alt="" />
                                   </a>
                                   <div className="p-5">
                                       <a href="#">
                                           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.price}</h5>
                                       </a>
                                       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.title}</p>
                                      
                                   </div>
                                   <div className="p-5 d-flex">
                                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.qtn}</h5>
                                       <button
                                           onClick={() => dispatch(handleRemove(ele.id))}
                                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                           remove
                                       </button>
                                   </div>
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