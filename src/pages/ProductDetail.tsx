import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../api/products';
import { IProduct } from '../types/products';
import { NavLink } from 'react-router-dom';
import { ICate } from '../types/cate';

type cateProps = {
  categories: ICate[];
}

const ProductDetail = (props: cateProps) => {
  
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProduct(data)
    }
    getProduct();
  }, [id])
  return (
    // nullish : kiểm tra nếu product có dữ liệu thì cho phép truy cập vào thuộc tính name
    // ngược lại thì default null
    <div className=' font-sans'>
      <div className='py-16 ml-36 font-[600] text-[#888] text-2xl'>Trang chủ / Sản phẩm / <span>Tên sản phẩm 1</span></div>
      <div className="container flex w-5/6 mx-auto">
        <div className="cate bg-[#ccc]">
          <div className="search p-4 mt-12 ">
            <form action="" className='flex'>
              <input type="text" placeholder='Search Products ' className='p-2 border-2 rounded-xl outline-none' />
            </form>
            <ul className='mt-12 p-8'>
              <li className='text-2xl font-[600] mb-8'>Danh mục </li>
              { 
                props.categories.map((item) => {
                  return <li className='py-2 hover:text-[#888] text-center'>
                    <NavLink to={`/category/${item.slug}`}>{item.name}</NavLink>
                  </li>
                })
              }

            </ul>
          </div>
        </div>
        <div className='flex w-5/6 p-12 mx-auto gap-8 ml-16'>
          <div className="img">
            <img src={`${product?.img}`} alt="" width='350' />
          </div>
          <div className="info">
            <h2 className='text-3xl pb-12 font-[600]'>{product?.name}</h2>
            <h5 className='font-[600] text-red-600'>{product?.price}đ</h5>
            <h6 className='mt-8'>Khối lượng: 1kg</h6>
            <h6 className='mt-2'>Bảo quản: Túi tiệt trùng</h6><br />
            <input type="number" min='1' className='my-3 outline-none border-2 p-3 rounded-lg mr-3' />
            <button className='bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700 '>Add to cart</button>
            <div className="contact border-2 p-4 mt-12  border-[#f59e0b]" style={{ position: 'relative' }}>
              <h3 className='rounded-lg  text-center text-white  bg-[#f59e0b] left-20 p-2 ' style={{ position: 'absolute', top: '-20px' }}>Chính sách khách hàng</h3>
              <ul>
                <li className='list-disc ml-2 py-1'>1 đổi 1 trong vòng 7 ngày</li>
                <li className='list-disc ml-2 py-1'>Hỗ trợ khách hàng 24/24</li>
                <li className='list-disc ml-2 py-1'>Tư vấn miễn phí</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail