import { useForm, SubmitHandler } from 'react-hook-form';
import { sigup } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

type props = {}

type TSigup = {
  email: String,
  password: String
}

const Sigup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TSigup>();
  const navigate = useNavigate();
  const onSigup: SubmitHandler<TSigup> = (data: TSigup) => {
    sigup(data)
    navigate('/')
  }

  return (
    <div className="">
      <h2 className="text-center">Đăng Ký</h2>
      <form className="mt-8 space-y-6 w-3/5 mx-auto" onSubmit={handleSubmit(onSigup)}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label className="sr-only">Email</label>
            <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" {...register('email')} />
          </div>
          <div>
            <label className="sr-only">Password</label>
            <input type="password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" {...register('password')} />
          </div>
        </div>
        <div>
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Sigup