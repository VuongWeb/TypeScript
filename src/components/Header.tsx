import React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <header >
        <div className='transition ease-in-out delay-300 duration-300 flex justify-around p-3  leading-loose  hover:bg-[#888] transition fixed w-full z-50 border-b-2 border-white'>
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
          <li className="nav-item mx-3">
            <NavLink to="/sigin" className='nav-link p-3 '><svg xmlns="http://www.w3.org/2000/svg" className="text-white  h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg></NavLink>
          </li>
          <li className="nav-item mx-3">
            <NavLink to="/sigup" className='nav-link p-3  '><svg xmlns="http://www.w3.org/2000/svg" className="text-white  h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg></NavLink>
          </li>
        </ul>
        </div>
      </header>
      <div className="banner">
        <img width='100%' src="https://scontent.fhan2-1.fna.fbcdn.net/v/t31.18172-8/22712367_126728308039778_3978332044617944075_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=rh0k89QTI0gAX82k3Kf&_nc_ht=scontent.fhan2-1.fna&oh=00_AT8ErXuCK14JCh1LBaeWT5_izFXFmCLz4CLOJ8aYkSSe_g&oe=6269A4DF" alt="" />
      </div>
    </div>
  )
}

export default Header