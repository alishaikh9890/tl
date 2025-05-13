import { useState } from "react"
import { useSelector } from "react-redux"

import {
  getAuth,
  signOut
} from "@firebase/auth"
import app from "../firebaseconfig"

export default function Dropdown(){

    const auth1= getAuth(app)


    const auth = useSelector((state) => state.auth.auth)
  return (
    <div class="relative border rounded-full group inline-block">
         <img onClick={()=>setDrop(true)} className='rounded-full w-10 cursor-pointer' src={auth.img} alt="" />
   
                <div class="absolute top-full right-1/2 translate-x-1/2 shadow hidden group-hover:block bg-white rounded-sm p-2 w-auto">
                    <ul className="flex flex-col gap-2">
                        <li>{auth.username}</li>
                        <li>{auth.email}</li>
                        <li><button onClick={() => signOut(auth1)} className="py-1 text-white font-bold rounded-sm hover:bg-red-700 px-5 bg-red-900">Logout &#x27B2;</button></li>
                    </ul>
                </div>
</div>
    
  )
}
