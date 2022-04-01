import React from 'react'

type Props = {}

const CartPage = (props: Props) => {
    return (
        <div className='py-24'>
            <table className='text-center mx-auto border-2 '>
                <thead>
                    <tr>
                        <th  className='p-8'>#</th>
                        <th  className='p-8'>Ảnh sản phẩm</th>
                        <th  className='p-8'>Giá sản phẩm</th>
                        <th  className='p-8'></th>
                        <th  className='p-8'>Số lượng</th>
                        <th  className='p-8'></th>
                        <th  className='p-8'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-8'>1</td>
                        <td className='p-8'><img src="https://uicookies.com/demo/theme/resto/img/img_1.jpg" width='50' className='mx-auto' alt="" /></td>
                        <td className='p-8'>1</td> 
                        <td className='p-8'>-</td>
                        <td className='p-8'>1</td>
                        <td className='p-8'>+</td>
                        <td className='p-8'>Xóa</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartPage