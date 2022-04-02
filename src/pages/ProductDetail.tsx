import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { read } from '../api/products';
import { IProduct } from '../types/products';
const ProductDetail = () => {
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
    <div className="container">
      <div className='flex w-5/6 p-12 '>
        <div className="img">
          <img src={`${product?.img}`} alt="" width='250' />
        </div>
        <div className="info">
          <h2>{product?.name}</h2>
          <h5>{product?.price}</h5>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail