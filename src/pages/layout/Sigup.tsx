import React from 'react'
import {useForm,SubmitHandler} from 'react-hook-form';

const Sigup = () => {
  return (
    <div className="">
      <h2 className="text-center">Đăng Ký</h2>
      <form className='w-50 m-auto'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
</div>

  )
}

export default Sigup