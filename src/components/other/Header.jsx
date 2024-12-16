import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const [username, setusername] = useState('')
  console.log(props)
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }


  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>there👋</span></h1>
     <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-red-600 focus:ring-4 focus:ring-red-300 focus:outline-none'>Log Out</button>
    </div>
  )
}

export default Header
