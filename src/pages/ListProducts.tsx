import { IProduct } from '../types/products'

type ProductsListProps = {
    products: IProduct[],
  }

const ListProducts = (props:ProductsListProps) => {
  return (
    <div><div className='grid grid-cols-3 gap-4 w-5/6 mx-auto'>
    {props.products.map((item)=>{
      return <div className='products border-2 border-solid p-3 text-center' key={item._id}>
      <img src="https://cf.shopee.vn/file/7ae7d0da6bba4694af7ef3e605ab1129" width='500' alt="" />
      <h2 className='font-[600] text-2xl py-3'>{item.name}</h2>
      <span className='text-red-600 text-xl py-3'>{item.price}</span>
    </div>
    })}
  </div></div>
  )
}

export default ListProducts