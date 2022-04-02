import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IProduct } from '../types/products'

type Productsprops = {
  products: IProduct[];
}

const ProductsPage = (props: Productsprops) => {
  return (
    <div>
      <h2 className='text-center text-5xl py-16 font-[600]'>Products Page</h2>
      <div className="container flex mx-auto w-5/6">
        <div className="cate bg-[#ccc]">
          <div className="search p-4 mt-12">
            <form action="" className='flex'>
              <input type="text" placeholder='Search Products ' className='p-2 border-2 rounded-xl outline-none' />
            </form>
            <ul className='mt-12 p-8'>
              <li className='text-2xl font-[600] mb-8'>Danh mục </li>
              <li className='py-2 hover:text-[#888] text-center'>
                <NavLink to='#'>danh muc 1</NavLink>
              </li>
              <li className='py-2 hover:text-[#888] text-center'>
                <NavLink to='#'>danh muc 1</NavLink>
              </li>
              <li className='py-2 hover:text-[#888] text-center'>
                <NavLink to='#'>danh muc 1</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="products grid grid-cols-3">
          {
            props.products.map((item) => {
              return <div className=' w-5/6 mx-auto'>

                <div className='products border-2 border-solid p-3 text-center my-8'>
                  <Link to={`/products/${item.id}`}>
                    <img src={`${item.img}`} width='400' alt="" />
                    <h2 className='font-[600] text-2xl py-3'>{item.name}</h2>
                    <span className='text-red-600 text-xl py-3'>{item.price}</span>
                  </Link>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProductsPage