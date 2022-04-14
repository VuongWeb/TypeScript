import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../../api/products';
import { ICate } from '../../types/cate';
import { IProduct } from '../../types/products';

type ProductsProps = {
  onUpdate: (product : IProduct) => void;
  categories: ICate[];

}
type FormInput = {
  name: String,
  price: number,
  img:String,
  category:String
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
    props.onUpdate(data)
    navigate('/admin/products')

  }
  return (
    <div>
      <h2 className='text-2xl font-[600] text-center py-5'>Sửa sản phẩm</h2>
            <form className="mt-8 space-y-6 w-3/5 mx-auto"onSubmit={handleSubmit(onSubmit)}>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label className="sr-only">Tên sản phẩm</label>
                        <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Tên sản phẩm" {...register('name', { required: true })} />
                    </div>
                    <div>
                        <label className="sr-only">Ảnh sản phẩm</label>
                        <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Ảnh sản phẩm (url)" {...register('img', { required: true })}  />
                    </div>
                    <div>
                       <select className='w-full p-2 border-2 border-[#ccc] outline-none text-[#888] font-thin'{...register('category')}>
                           {props.categories.map((item)=>{
                               return <option  value={`${item._id}`} key={item._id}>{item.name}</option>
                           })}
                       </select>
                    </div>
                    <div>
                        <label className="sr-only">Giá sản phẩm</label>
                        <input type="number" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Giá sản phẩm" {...register('price', { required: true })}/>
                    </div>
                </div>
                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Edit
                    </button>
                </div>
            </form>
    </div>
  )
}

export default EditProduct