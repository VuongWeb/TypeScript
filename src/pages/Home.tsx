import { Link } from 'react-router-dom'
import { IProduct } from '../types/products'
import Panigate from './layout/panigate'
import ListProducts from './ListProducts'

type ProductsListProps = {
  products: IProduct[],
}

const Home = (props: ProductsListProps) => {
  return (
    <div>
      <h1 className='text-center py-24 font-[600] text-6xl '>Trang chủ</h1>
      {/* <ListProducts products={props}/> */}
      <div className='grid grid-cols-4 gap-8 w-5/6 mx-auto'>
        {props.products.map((item) => {
          return <div className='products border-2 border-solid p-3 text-center'>
            <Link to={`/products/${item._id}`}>
              <img src={`${item.img}`} width='400' alt="" />
              <h2 className='font-[600] text-2xl py-3'>{item.name}</h2>
              <span className='text-red-600 text-xl py-3'>{item.price}</span>
            </Link>
          </div>
        })}
      </div>
      <Panigate/> 
      <h2 className="text-5xl font-[700] py-16 mb-16 border-b-4 border-cyan-500 ml-24 my-24 ">My Programs</h2>
      <div className='grid grid-cols-3 gap-4 mb-24 w-5/6 mx-auto my-24'>
        <div className='text-center'>
          <img src="https://uicookies.com/demo/theme/trainer/img/img_1.jpg" width='350px' className='mx-auto rounded-xl' alt="" />
          <h4 className='py-4 text-2xl font-[600]'>Title</h4>
          <span className='text-[#888] '>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>
        </div>
        <div className='text-center'>
          <img src="https://uicookies.com/demo/theme/trainer/img/img_1.jpg" width='350px' className='mx-auto rounded-xl' alt="" />
          <h4 className='py-4 text-2xl font-[600]'>Title</h4>
          <span className='text-[#888] '>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>
        </div>
        <div className='text-center'>
          <img src="https://uicookies.com/demo/theme/trainer/img/img_1.jpg" width='350px' className='mx-auto rounded-xl' alt="" />
          <h4 className='py-4 text-2xl font-[600]'>Title</h4>
          <span className='text-[#888] '>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</span>
        </div>
      </div>
      <h2 className='text-5xl text-center'>Campus</h2>
      <div className="list-image grid grid-cols-4 w-5/6 mx-auto py-16 object-cover">
        <div className='object-cover overflow-hidden'>
          <img src="https://uicookies.com/demo/theme/resto/img/img_1.jpg" alt="" className='hover:scale-125 ease-in-out duration-300 ' />
        </div>
        <div className='object-cover overflow-hidden'>
          <img src="https://uicookies.com/demo/theme/resto/img/img_1.jpg" alt="" className='hover:scale-125 ease-in-out duration-300 ' />
        </div>
        <div className='object-cover overflow-hidden'>
          <img src="https://uicookies.com/demo/theme/resto/img/img_1.jpg" alt="" className='hover:scale-125 ease-in-out duration-300 ' />
        </div>
        <div className='object-cover overflow-hidden'>
          <img src="https://uicookies.com/demo/theme/resto/img/img_1.jpg" alt="" className='hover:scale-125 ease-in-out duration-300 ' />
        </div>
        <div className='object-cover overflow-hidden'>
          <img src="https://uicookies.com/demo/theme/resto/img/img_1.jpg" alt="" className='hover:scale-125 ease-in-out duration-300 ' />
        </div>
        <div className='object-cover overflow-hidden'>
          <img src="https://uicookies.com/demo/theme/resto/img/img_1.jpg" alt="" className='hover:scale-125 ease-in-out duration-300 ' />
        </div>
        <div className='object-cover overflow-hidden'>
          <img src="https://uicookies.com/demo/theme/resto/img/img_1.jpg" alt="" className='hover:scale-125 ease-in-out duration-300 ' />
        </div>
        <div className='object-cover overflow-hidden'>
          <img src="https://uicookies.com/demo/theme/resto/img/img_1.jpg" alt="" className='hover:scale-125 ease-in-out duration-300 ' />
        </div>
      </div>

    </div>
  )
}

export default Home