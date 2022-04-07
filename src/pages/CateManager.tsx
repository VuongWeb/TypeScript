import React from 'react'
import { ICate } from '../types/cate';
import { Link } from 'react-router-dom'

type Props = {
    listcate: ICate[];
    onDelete: (id: number) => void;
}

const CateManager = (props: Props) => {

    return (
        <div>
            <h1 className='text-center text-3xl font-[600] py-8'>ListProduct</h1>
            <Link to='/admin/categories/add' className='bg-green-600 p-3 rounded-xl text-white my-8 ml-72'>Thêm danh mục</Link>
            <table className="table border-2 border-solid mx-auto mt-8">
                <thead>
                    <tr>
                        <th scope="col" className='border-b-2 px-12 py-4'>#</th>
                        <th scope="col" className='border-b-2 px-12 py-4'>Name</th>
                        <th scope="col" className='border-b-2 px-12 py-4'>Edit</th>
                        <th scope="col" className='border-b-2 px-12 py-4'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listcate.map((item, i) => {
                        // console.log(item)
                        return <tr key={i}>
                            <td className='px-12 py-4'>{i + 1}</td>
                            <td className='px-12 py-4'>{item.name}</td>
                            <td className='px-12 py-4'><Link to={`/admin/products/${item._id}/edit`} className='bg-cyan-500 text-white p-3 rounded-2xl'>Edit</Link></td>
                            <td className='px-12 py-4'><button className='bg-red-600 text-white p-2 rounded-2xl' onClick={() => props.onDelete(item._id)}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            </button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CateManager