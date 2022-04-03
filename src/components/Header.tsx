import React, { useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'


const Header = () => {
  const [status, setStatus] = useState(false);
  const [statusSigup, setStatusSigup] = useState(false);
  return (
    <div>
      <header >
        <div className='transition duration-300 flex justify-around p-3 opacity-90 leading-loose  hover:bg-[#ccc] hover:text-[#000] fixed w-full z-50 border-b-2 border-white duration-200'>
          <div className='logo'>
            <span className='text-4xl font-[800] leading-loose text-white '>Mixi.</span>
          </div>
          <ul className="nav mt-7 flex">
            <li className="nav-item">
              <NavLink to="/" className='transition ease-in-out delay-300 duration-300 p-3  text-white font-[600] text-2xl no-underline hover:border-b-2 mx-2 hover:border-white  '>HomePage</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className='transition ease-in-out delay-300 duration-300 p-3 text-white font-[600] text-2xl no-underline hover:border-b-2 mx-2 hover:border-white '>Products Page</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className='transition ease-in-out delay-300 duration-300 p-3 text-white font-[600] text-2xl no-underline  hover:border-b-2 mx-2 hover:border-white '>About page</NavLink>
            </li>
          </ul>
          <ul className="nav flex">
            <li className="nav-item mx-3" title='Đăng nhập'>
              <button className='mt-8'  onClick={() => {
                setStatus(!status);
                console.log(status)
              }}><svg xmlns="http://www.w3.org/2000/svg" className="text-white  h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg></button>
                {status ? <div className="sigin bg-[#fff] p-3 fixed right-24 top-20">
                  <h2 className='text-center text-xl py-4'>Đăng nhập</h2>
                  <form action="" className='p-4'>
                    <input type="text" placeholder='Tên đăng nhập' className='p-2 my-2 border-2 outline-none'/><br />
                    <input type="password" placeholder='Pass word ' className='p-2 my-2 border-2 outline-none'/><br />
                    <button className='bg-[#888] p-2 rounded-xl mx-auto text-white'>đăng nhập</button>
                  </form>
                </div> : ""}
            </li>
            <li className="nav-item mx-3">
              <button className='mt-8' onClick={() => {
                setStatusSigup(!statusSigup);
                console.log(statusSigup)
              }}><svg xmlns="http://www.w3.org/2000/svg" className="text-white  h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg></button>
              {statusSigup ? <div className="sigin bg-[#fff] p-3 fixed right-24 top-20">
                  <h2 className='text-center text-xl py-4'>Đăng Ký</h2>
                  <form action="" className='p-4'>
                    <input type="text" placeholder='Tên đăng nhập' className='p-2 my-2 border-2 outline-none'/><br />
                    <input type="password" placeholder='Pass word ' className='p-2 my-2 border-2 outline-none'/><br />
                    <button className='bg-[#888] p-2 rounded-xl mx-auto text-white'>đăng Ký</button>
                  </form>
                </div> : ""}
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/cart" className='nav-link p-3'><svg xmlns="http://www.w3.org/2000/svg" className="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg></NavLink>
            </li>
          </ul>
        </div>
      </header>
      <div className="banner">
        <img width='100%' height='600' src="https://res.cloudinary.com/dkiw9eaeh/image/upload/v1648878529/wm9rhh2i3z9jrkjh6xnr.jpg"  alt="" />
      </div>
    </div>
  )
}

export default Header