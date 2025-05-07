import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/authSlice'
import app from '../firebaseconfig'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from '@firebase/auth'

import {getFirestore, getDoc, setDoc, doc} from "@firebase/firestore"

const Login = () => {

  const auth = getAuth(app)
  const db = getFirestore(app)

  const [regData, setRegData] = useState({username:"", img:"", email:"", phone:0, password: ""})
  const [logData, setLogData] = useState({email:"", password: ""})

    const dispatch = useDispatch()

    function handleData(e){
      const {name, value} = e.target;

      setRegData({
        ...regData,
        [name]:value
      })

      setLogData({
        ...logData,
        [name]:value
      })
    }


    async function handleRegsiter(){
     const res = await createUserWithEmailAndPassword(auth, regData.email, regData.password)
     
        const user = await res.user
        console.log(user)
   
        await updateProfile(user, {
          displayName: regData.username,
          photoURL: regData.img
        })

        console.log(auth.currentUser)

        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          username : regData.username,
          email : regData.email,
          phone : regData.phone,
          createdAt :new Date()
        })

        const {displayName, email, photoURL} = auth.currentUser
        dispatch(login({username: displayName, email: email, img:photoURL}))
      
    }


   async function handleLogin(){

      const res = await signInWithEmailAndPassword(auth, logData.email, logData.password)
   
        const user = res.user;
      
        const storeUser = await getDoc(doc(db, "users", user.uid))

        console.log(auth.currentUser)
        
        if(storeUser.exists())
          {
            console.log(storeUser.data())
          } 
          else{
            console.log("data not found...!")
          }
          
          const {displayName, email, photoURL} = auth.currentUser
          dispatch(login({username: displayName, email: email, img:photoURL}))
  
    }








  return (
    <div>
        <div className="w-md border p-5  fixed top-1/2 start-100 -translate-y-1/2 -translate-x-1/2">
                <div className="flex flex-col gap-7">
                    Regester
                    <input type="text" placeholder='Username' name="username" onChange={handleData} className='border p-3 text-xl' />
                    <input type="url" placeholder='profile image' name="img" onChange={handleData} className='border p-3 text-xl' />
                    <input type="text" placeholder='email' name="email" onChange={handleData} className='border p-3 text-xl' />
                    <input type="number" placeholder='phone' name="phone" onChange={handleData} className='border p-3 text-xl' />
                    <input type="text" placeholder='password' name="password" onChange={handleData} className='border p-3 text-xl' />
                    <button
                    //  onClick={()=> dispatch(login())}
                        onClick={handleRegsiter}
                      className='rounded py-1 px-4 bg-green-600'>Register</button>
                </div>
        </div>
        <div className="w-md border p-5  fixed top-1/2 start-220 -translate-y-1/2 -translate-x-1/2">
                <div className="flex flex-col gap-7">
                  Login
                    <input type="text" placeholder='email' name="email" onChange={handleData} className='border p-3 text-xl' />
                    <input type="text" placeholder='password' name="password" onChange={handleData} className='border p-3 text-xl' />
                    <button
                    //  onClick={()=> dispatch(login())}
                        onClick={handleLogin}
                      className='rounded py-1 px-4 bg-green-600'>Login</button>
                </div>
        </div>
    </div>
  )
}

export default Login