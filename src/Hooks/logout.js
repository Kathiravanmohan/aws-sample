import React from 'react'
import { useNavigate } from 'react-router-dom'


function Logout() {
    let navigate=useNavigate()
    return()=>{
  sessionStorage.clear()
 navigate('/auth/login')
}
}

export default Logout 