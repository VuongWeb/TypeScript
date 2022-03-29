import React from 'react'

type ProductProps = {
    data: {
        id: number,
        name: string,
        price:number
    }
}

const Product = ({ data: { id, name,price } }: ProductProps) => {
  return (
    <div>
      <input type="text" value={name} placeholder='Name' />
      <input type="text" value={price} placeholder='Price' />
      <button>Edit</button>
    </div>
  )
}

export default Product