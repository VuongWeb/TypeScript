import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form";
import { sigin, sigup } from '../api/auth';

type SiginProps = {
  onSigin: (user: TForm) => void
}

export type TForm = {
  name?: String,
  email: String,
  password: String
}


const Header = (props: SiginProps) => {

  const [status, setStatus] = useState(false);
  const [statusSigup, setStatusSigup] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<TForm>();
  
  //  const user = JSON.parse(localStorage.getItem('user')).user ;

  //signin
  const onSigin: SubmitHandler<TForm> = async (data) => {
    const { data: user } = await sigin(data);
    localStorage.setItem('user', JSON.stringify(user));
  }

  //signup
  const onSigup: SubmitHandler<TForm> = (data) => {
    sigup(data);
    const navigate = useNavigate();
    navigate('/');
  }


  return (
    <div>
      <header >
        <div className='transition duration-300 flex justify-around p-3 opacity-90 leading-loose  hover:bg-[#ccc] hover:text-[#000] bg-[#fff] w-full z-50 border-b-2 border-white duration-200'>
          <div className='logo'>
            <span className='text-4xl font-[800] leading-loose text-black '>Mixi.</span>
          </div>
          <ul className="nav mt-7 flex">
            <li className="nav-item">
              <NavLink to="/" className='transition ease-in-out delay-300 duration-150 p-3  text-black font-[600] text-2xl no-underline hover:border-b-4 mx-2 hover:border-black  '>HomePage</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className='transition ease-in-out delay-150 duration-300 p-3 text-black font-[600] text-2xl no-underline hover:border-b-4 mx-2 hover:border-black '>Products Page</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/post" className='transition ease-in-out delay-150 duration-300 p-3 text-black font-[600] text-2xl no-underline hover:border-b-4 mx-2 hover:border-black '>Blog Page</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className='transition ease-in-out delay-150 duration-300 p-3 text-black font-[600] text-2xl no-underline  hover:border-b-4 mx-2 hover:border-black '>About page</NavLink>
            </li>
            {/* signin  */}
            {user && user.role == 1 ? <li className="nav-item" id='admin' >
              <NavLink to="/admin" className='transition ease-in-out delay-150 duration-300 p-3 text-whitblack font-[600] text-2xl no-underline  hover:border-b-4 mx-2 hover:border-black '>Admin</NavLink>
            </li> : ''}
          </ul>
          <ul className="nav flex">

            {user ? <div className='flex'><li className="nav-item transition ease-in-out delay-150 duration-300 mt-7 text-black font-[600] text-2xl no-underline">{user?.name}
            </li>
              <li className="nav-item transition ease-in-out delay-150 duration-300 mt-8 text-black font-[600] text-2xl no-underline ml-3 ">
                <button onClick={()=>localStorage.removeItem('user')}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </li>
            </div> : <div className='flex'>
              <li className="nav-item mx-3" title='Đăng nhập'>
                <button className='mt-8' onClick={() => {
                  setStatus(!status);
                }}><svg xmlns="http://www.w3.org/2000/svg" className="text-black  h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg></button>
                {status ? <div className="sigin bg-[#fff] p-3 fixed right-24 top-20">
                  <h2 className='text-center text-xl py-4'>Đăng nhập</h2>
                  <form action="" onSubmit={handleSubmit(onSigin)} className='p-4'>
                    <input type="text" placeholder='Tên đăng nhập' className='p-2 my-2 border-2 outline-none' {...register('email')} /><br />
                    <input type="password" placeholder='Pass word ' className='p-2 my-2 border-2 outline-none' {...register('password')} /><br />
                    <button className='bg-[#888] p-2 rounded-xl mx-auto text-white'>Đăng nhập</button>
                  </form>
                </div> : ""}
              </li>
              <li className="nav-item mx-3" title='Đăng ký'>
                <button className='mt-8' onClick={() => {
                  setStatusSigup(!statusSigup);
                }}><svg xmlns="http://www.w3.org/2000/svg" className="text-black  h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg></button>
                {statusSigup ? <div className="sigin bg-[#fff] p-3 fixed right-24 top-20">
                  <h2 className='text-center text-xl py-4'>Đăng Ký</h2>
                  <form action="" onSubmit={handleSubmit(onSigup)} className='p-4'>
                    <input type="text" placeholder='Email của bạn' className='p-2 my-2 border-2 outline-none' {...register('email')} /><br />
                    <input type="text" placeholder='Họ và Tên' className='p-2 my-2 border-2 outline-none' {...register('name')} /><br />
                    {/* {errors.name && <span className='text-red-600'>Name is required</span>} */}
                    <input type="password" placeholder='Pass word ' className='p-2 my-2 border-2 outline-none' {...register('password')} /><br />
                    <button className='bg-[#888] p-2 rounded-xl mx-auto text-white'>Đăng Ký</button>
                  </form>
                </div> : ""}
              </li>
            </div>}


            <li className="nav-item mx-3 relative">
              <NavLink to="/cart" className='nav-link p-3 z-20'><svg xmlns="http://www.w3.org/2000/svg" className="text-black h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg><span className='text-white  absolute top-5 left-4 z-10  bg-red-600 rounded-full px-2 text-[12px]'>0</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </header >
      <div className="banner">
        <img width='100%' height='600' src="https://cdn.pixabay.com/photo/2017/08/01/08/16/couple-2563424_960_720.jpg" alt="" />
      </div>
    </div >
  )
}

export default Header