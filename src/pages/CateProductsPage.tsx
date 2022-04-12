import React, { useEffect, useState } from 'react'
import { ICate } from '../types/cate'
import { NavLink, useParams, Link } from 'react-router-dom';
import { IProduct } from '../types/products';
import { readCate } from '../api/category';

type Props = {
    categories: ICate[];
    products: IProduct[];
}

const CateProductsPage = (props: Props) => {
    const { id } = useParams();
    const [cate, setCate] = useState([]);

    console.log(id);

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await readCate(id);
            setCate(data);
        }
        getProduct();
    }, [id])
    console.log('cate:', cate);
    

    return (
        <div className=' font-sans'>
            <div className='py-16 ml-36 font-[600] text-[#888] text-2xl'>Trang chủ / {}</div>
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
                                    return <li className='py-2 hover:text-[#888] text-center' key={item._id}>
                                        <NavLink to={`/category/${item._id}`}>{item.name}</NavLink>
                                    </li>
                                })
                            }

                        </ul>
                    </div>
                </div>
                <div className='flex w-5/6 p-12 mx-auto gap-8 ml-16'>
                    <div className="products grid grid-cols-3">
                        {
                            cate.products.map((item) => {
                                return <div className=' w-5/6 mx-auto' key={item._id}>
                                    <div className='products border-2 border-solid p-3 text-center my-8'>
                                        <Link to={`/products/${item._id}`}>
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
        </div>
    )
}

export default CateProductsPage