import React, { useState } from "react";

const Login=({handleLogin})=> {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log('email ',email,'Password',password)
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

    return ( 
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="border-2 rounded-2xl border-blue-800 p-10 shadow-xl bg-gray-950">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-3xl text-white font-bold mb-8">Welcome Back</h1>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="w-full max-w-md outline-none bg-transparent border-2 border-blue-800  py-3 px-5 text-lg rounded-lg placeholder:text-gray-400 text-white focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              type="email"
              placeholder="Enter your email"
            />
      
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="w-full max-w-md outline-none bg-transparent border-2 border-blue-800  py-3 px-5 text-lg rounded-lg mt-6 placeholder:text-gray-400 text-white focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              type="password"
              placeholder="Enter your password"
            />
      
            <button className="w-full max-w-md mt-6 text-white bg-gradient-to-r from-blue-800  to-blue-400 py-3 px-5 text-lg rounded-lg hover:shadow-lg hover:shadow-blue-500 transition-all duration-300">
              Log In
            </button>
      
          </form>
        </div>
      </div>
      
    
    
    
    
    );
}

export default Login;