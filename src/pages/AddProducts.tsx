import { useForm, SubmitHandler } from 'react-hook-form';
import { IProduct } from '../types/products';
import { useNavigate } from 'react-router-dom';
import { ICate } from '../types/cate';

type ProductAddProps = {
    onAdd: (product: IProduct) => void,
    categories: ICate[];
}
type TInputs = {
    name: String,
    price: number,
    img:String,
    cateId:String
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>()
    const Navigate = useNavigate();
    const onSubmit: SubmitHandler<TInputs> = (data) => {
        props.onAdd(data)
        // Navigate('/admin/products')
    }
    return (
        <div>
            <h2 className='text-2xl font-[600] text-center py-5'>Thêm sản phẩm</h2>
            <form className="mt-8 space-y-6 w-3/5 mx-auto"onSubmit={handleSubmit(onSubmit)}>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label className="sr-only">Tên sản phẩm</label>
                        <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Tên sản phẩm" {...register('name')} />
                    </div>
                    <div>
                        <label className="sr-only">Ảnh sản phẩm</label>
                        <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Ảnh sản phẩm (url)" {...register('img')} />
                    </div>
                    <div>
                       <select className='w-full p-2 border-2 border-[#ccc] outline-none text-[#888] font-thin'{...register('cateId')}>
                           {props.categories.map((item)=>{
                               return <option  value={`${item.slug}`}>{item.name}</option>
                           })}
                       </select>
                    </div>
                    <div>
                        <label className="sr-only">Giá sản phẩm</label>
                        <input type="number" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Giá sản phẩm" {...register('price')}/>
                    </div>
                </div>
                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Thêm
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ProductAdd;

