import React from 'react'
import { TPost } from '../types/post'

type Props = {
  post: TPost[]
}

const PostPage = (props: Props) => {
  console.log(props);

  return (
    <div>
      <h1 className='text-center py-24 font-[600] text-6xl '>Blog</h1>
      {/* <ListProducts products={props}/> */}
      <div className=' gap-8 w-5/6 mx-auto'>
        {props.post.map((item) => {
          return <div className='products border-2 border-solid p-3 flex ' key={item._id}>
            <img src={`${item.img}`} width='400' alt="" />
            <div className="info ml-12">
              <h2 className='font-[600] text-2xl py-3'>{item.title}</h2>
              <span className='text-red-600 text-xl py-3'>{item.content}</span>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default PostPage