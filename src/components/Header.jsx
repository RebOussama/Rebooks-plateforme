import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { RiAccountCircleLine,RiArrowDownSLine,RiHeartLine  } from "react-icons/ri";
import { useState } from "react";
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <div className='flex items-center'>
        <div className="logo w-2/12 mr-6 flex "><img src="./logo.png" className='w-[120px] mt-4' alt="" /></div>
        <form className='w-6/12 ' action="">
          <div className="search relative">
          <input type="search" placeholder='Search By Title' className='w-full placeholder:font-bold p-1.5	 placeholder:text-[#5B7483] border-2 border-[#5B7483]' />
          <button className='bg-[#5B7483] py-1.5 px-3 text-white font-bold absolute right-0 h-full  text-3xl	'><AiOutlineSearch /></button>
        </div>
        </form>
        <div className="Account flex items-center gap-2 text-lg text-[#283342] font-bold border-r-4 mx-3 border-[#636E7C] w-2/12">
          <RiAccountCircleLine className='text-xl'/>
          My Account
          <RiArrowDownSLine  className='text-2xl self-end	'/>
        </div>
        <div className="WishList flex items-center gap-2 text-lg text-[#283342] font-bold  mx-3 w-2/12">
          <RiHeartLine className='text-xl' />
          Wishlist
        </div>
      </div>
      <nav>
        <ul className='flex  justify-center'>
          <li className='px-14 border-r-[3px] border-[#636E7C]'><NavLink to="/" className={({ isActive }) => isActive ? "text-[#283342] text-lg font-extrabold" : "text-[#283342] font-bold"}>Home</NavLink></li>
          <li  className='px-14 border-r-[3px] border-[#636E7C]'><NavLink to="/Marketplace" className={({ isActive }) => isActive ? "text-[#283342] text-lg font-extrabold" : "text-[#283342] font-bold"}>Marketplace</NavLink></li>
          <li  className='px-14 border-r-[3px] border-[#636E7C]'><NavLink to="/AudioBooks" className={({ isActive }) => isActive ? "text-[#283342] text-lg font-extrabold" : "text-[#283342] font-bold"}>AudioBooks</NavLink></li>
          <li  className='px-14 border-r-[3px] border-[#636E7C]'><NavLink to="/PDFBooks" className={({ isActive }) => isActive ? "text-[#283342] text-lg font-extrabold" : "text-[#283342] font-bold"}>PDF Books</NavLink></li>
          <li  className='px-14 border-r-[3px] border-[#636E7C]'><NavLink to="/Membership" className={({ isActive }) => isActive ? "text-[#283342] text-lg font-extrabold" : "text-[#283342] font-bold"}>Membership</NavLink></li>
          <li className='px-14' ><NavLink to="/AboutUs" className={({ isActive }) => isActive ? "text-[#283342] text-lg font-extrabold" : "text-[#283342] font-bold"}>About Us</NavLink></li>
        </ul>
        
      </nav>
    </div>
  )
}

export default Header
