import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../../api/products';
import { IProduct } from '../../types/products';

type ProductsProps = {
  onUpdate: (product : IProduct) => void
}
type FormInput = {
  name: String,
  price: number
}
const EditProduct = (props: ProductsProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInput>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      reset(data);
    }
    getProduct();
  }, [])
  const onSubmit: SubmitHandler<FormInput> = (data:IProduct) => {
    console.log(123);
    props.onUpdate(data)
    navigate('/admin/products')

  }
  return (
    <div>
      <h2 className='text-center'>Edit product</h2>
      <form className='w-50 m-auto' onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name products</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('name', { required: true })} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Price products</label>
          <input type="number" className="form-control" id="exampleInputPassword1"{...register('price', { required: true })} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form >
    </div>
  )
}

export default EditProduct