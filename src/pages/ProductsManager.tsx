import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../types/products'

type ProductListProps = {
  products: IProduct[],
  onRemove: (id: number) => void
}

const ProductManager = (props: ProductListProps) => {
  return (
    <div>
      <h1>ListProduct</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, i) => {
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><Link to={`/admin/products/${item.id}/edit`} className='btn btn-primary'>Edit</Link></td>
              <td><button className='btn btn-danger' onClick={()=>props.onRemove(item.id)}>Remove</button></td>
            </tr>
          })}

        </tbody>
      </table>

    </div>
  )
}

export default ProductManager