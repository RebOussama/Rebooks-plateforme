import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='flex bg-[#FFFFFF]'>
       <div className="left_section flex justify-center items-start   basis-1/2 max-lg:basis-full	 h-[100vh]">
         <div className=' w-[80%] max-w-lg  text-center '>
          <img className='w-[140px] mx-auto' src="/logo.png"alt="" />
          <div className=' w-[80%] mx-auto rounded-[20px] shadow-2xl '>
            <form className='flex flex-col rounded-[20px] bg-[#F6F6F6]' action="#">
              <h1 className='text-[#5B7483] text-2xl p-3 font-righteous'>Sign Up</h1>
              <input className='my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] ' type="text" placeholder="First Name"/>
              <input className='my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] '  type="text" placeholder="Last Name"/>
              <input className='my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] ' type="email" placeholder="Email"/>
              <input className='my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] ' type="password" placeholder="Password" />
              <input className='my-3 p-2 rounded-xl	  w-[80%] mx-auto bg-[#FFFFFF] ' type="password" placeholder="Confirm Password" />
              <button className='bg-[#1B1A32] text-white my-3 w-[80%] mx-auto rounded-2xl p-2'>Sign Up</button>
              <p className='my-2'>Have an Account <Link className='text-[#44B89D] font-bold	' to="/login">Login Here</Link></p>

            </form>

          </div>
         </div>
       </div>
       <div className="right_section  basis-1/2 max-lg:hidden max-lg:basis-0">
         <img className='h-[100vh] w-full'  src="./SignUp.jpg" alt="" />
       </div>
    </div>
  )
}

export default SignUp
