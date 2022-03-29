import { useForm, SubmitHandler } from 'react-hook-form';
import { IProduct } from '../types/products';
import { useNavigate } from 'react-router-dom';

type ProductAddProps = {
    onAdd: (product: IProduct) => void
}
type TInputs = {
    name: String,
    price: number
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>()
    const Navigate = useNavigate();
    const onSubmit: SubmitHandler<TInputs> = (data: IProduct) => {
        props.onAdd(data)
        Navigate('/admin/products')
    }


    return (
        <div>
            <h2 className='text-center'>Thêm sản phẩm</h2>
            <form className='w-50 m-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tên sản phẩm</label>
                    <input type="text" className="form-control"  {...register('name')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Giá sản phẩm</label>
                    <input type="number" className="form-control" {...register('price')} />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form >
        </div>
    )
}

export default ProductAdd;

