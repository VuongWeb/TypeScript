import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { sigin } from '../../api/auth';

type props = {}

type TSigin = {
    email: String,
    password: String
}

const Sigin = (props: props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TSigin>();
    const navigate = useNavigate();
    const onSigin: SubmitHandler<TSigin> = (data:TSigin) => {
        sigin(data)
        navigate('/')
    }
    // const 
    return (
        <div>
            <h2 className='text-center'>Đăng nhập</h2>
            <form className='w-50 m-auto' onSubmit={handleSubmit(onSigin)}>
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
            </form >
        </div>

    )
}

export default Sigin