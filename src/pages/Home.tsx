import { IProduct } from '../types/products'
import ListProducts from './ListProducts'

type ProductsListProps = {
  products: IProduct[],
}

const Home = (props: ProductsListProps) => {
  return (
    <div>
      <h1 className='text-center py-5 font-[600] text-3xl'>Trang chủ</h1>
      {/* <ListProducts products={props}/> */}
      <div className='grid grid-cols-4 gap-8 w-5/6 mx-auto'>
        {props.products.map((item)=>{
          return <div className='products border-2 border-solid p-3 text-center'>
          <img src={item.img} width='400' alt="" />
          <h2 className='font-[600] text-2xl py-3'>{item.name}</h2>
          <span className='text-red-600 text-xl py-3'>{item.price}</span>
        </div>
        })}
      </div>
    </div>
  )
}

export default Home