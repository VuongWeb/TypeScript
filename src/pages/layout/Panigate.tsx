import React from 'react'
import { Link } from 'react-router-dom';
// import { IProduct } from '../../types/products';

type Props = {
    postPerPage: number;
    totalPost: number,
    paginate: (number:number) => void
}

const Panigate = (props: Props) => {
  console.log('props:',props);
    

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(props.totalPost / props.postPerPage); i++) {
        pageNumber.push(i)
    }
    console.log('pagenumber:', pageNumber);

    return (
        <ul className='Panigate flex p-12 ml-[630px]'>
            {pageNumber.map(number => {
                return <li className=' border-2 py-2 border-blue-600 mx-2 hover:bg-blue-400' key={number}>
                    <Link to='#' className='p-4' onClick={() => props.paginate(number)}>{number}</Link>
                </li>
            })}
        </ul>
    )
}

export default Panigate