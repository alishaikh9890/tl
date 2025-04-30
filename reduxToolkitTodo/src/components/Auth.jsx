import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/authSlice'

const Auth = () => {


    const dispatch = useDispatch()

  return (
    <div>
        <div className="w-lg border fixed top-1/2 start-1/2 transform -translate-1/2 p-10">

            <div className='flex flex-col gap-5'>
                <h2 className='text-4xl font-bold text-center'>Login</h2>
                <input type="text" placeholder='username' className='border p-3 rounded text-1xl' />
                <input type="text" placeholder='password' className='border p-3 rounded text-1xl' />
                <button onClick={()=>dispatch(login())} className='bg-green-600 text-white hover:bg-green-900 py-1 rounded'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Auth