import React from 'react'
import { logout } from '../config/firebase'
import { useAuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const {user} = useAuthContext()
    const navigate = useNavigate()
    const handleClick=()=>{
        if(user){
            logout()
        }
        else{
         navigate("/login")   
        }
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <button className="bg-violet-700 p-3 rounded-lg text-white" onClick={handleClick}>{user?"Logout":"Login"}</button>
    </div>
  )
}

export default HomePage