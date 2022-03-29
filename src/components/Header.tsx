import React from 'react'
import {Routes,Route,NavLink,Navigate} from 'react-router-dom'


const Header = () => {
  return (
    <div className='d-flex justify-content-around'>
      <div className='logo'>
        <img src="https://shop.mixigaming.com/wp-content/uploads/2020/09/118070490_238469837342215_4161744696367508805_n.jpg" alt="" width='150'/>
      </div>
        <ul className="nav mt-4">
          <li className="nav-item">
            <NavLink to="/" className='nav-link p-3 fs-4 fw-bold text-dark'>HomePage</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/products" className='nav-link p-3 fs-4 fw-bold text-dark'>Products Page</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/about" className='nav-link p-3 fs-4 fw-bold text-dark'>About page</NavLink>
          </li>
      </ul>
      <ul className="nav mt-4">
          <li className="nav-item">
            <NavLink to="/sigin" className='nav-link pt-3 text-dark fw-bolder'>Login</NavLink>
          </li> 
          <li className="nav-item">
          <NavLink to="/sigup" className='nav-link pt-3  text-dark fw-bolder'>Register</NavLink>
          </li>
      </ul>
    </div>
  )
}

export default Header