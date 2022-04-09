import React from 'react'
import {Link} from 'react-router-dom';

type Props = {}

const Panigate = (props: Props) => {
  return (
    <div>
        <ul>
            <li className='text-xl text-black'>
                <Link to='#'>1</Link>
            </li>
            <li className='text-xl text-black'>
                <Link to='#'>1</Link>
            </li>
            <li className='text-xl text-black'>
                <Link to='#'>1</Link>
            </li>
            <li className='text-xl text-black'>
                <Link to='#'>1</Link>
            </li>
            <li className='text-xl text-black'>
                <Link to='#'>1</Link>
            </li>
        </ul>
    </div>
  )
}

export default Panigate