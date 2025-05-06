import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/authSlice'
import { auth, provider } from '../firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = () => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


    const dispatch = useDispatch()


    function handleSign(){
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        let user = auth.currentUser
        console.log(user)
      })
    }


    function handleSignIn(){
      auth.signInWithPopup(provider)
      .then((res) => {
        dispatch(login({
          username: res.user.displayName,
          useremail: res.user.email
        }))
      })
    }

  return (
    <div>
        <div className="w-lg border flex gap-12 fixed top-1/2 start-1/2 transform -translate-1/2 p-10">

            <div className='flex flex-col gap-5 border'>
                <h2 className='text-4xl font-bold text-center'>Register</h2>
                <input type="text" placeholder='username' onChange={(e) => setName(e.target.value)} className='border p-3 rounded text-1xl' />
                <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} className='border p-3 rounded text-1xl' />
                <input type="text" placeholder='phone' onChange={(e) => setPhone(e.target.value)} className='border p-3 rounded text-1xl' />
                <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} className='border p-3 rounded text-1xl' />
                <button onClick={handleSign} className='bg-green-600 text-white hover:bg-green-900 py-1 rounded'>Register</button>


                <br></br>
                <br></br>
                <button onClick={handleSignIn} className='bg-amber-600 text-white hover:bg-amber-900 py-1 rounded'>🛜 google</button>
                <br></br>
                <br></br>
            </div>
            <div className='flex flex-col gap-5'>
                <h2 className='text-4xl font-bold text-center'>Login</h2>
                <input type="text" placeholder='username' className='border p-3 rounded text-1xl' />
                <input type="text" placeholder='password' className='border p-3 rounded text-1xl' />
                <button onClick={()=>dispatch(login())} className='bg-green-600 text-white hover:bg-green-900 py-1 rounded'>Login</button>


                <br></br>
                <br></br>
                <button onClick={handleSignIn} className='bg-amber-600 text-white hover:bg-amber-900 py-1 rounded'>🛜 google</button>
                <br></br>
                <br></br>
            </div>
        </div>
    </div>
  )
}

export default Auth