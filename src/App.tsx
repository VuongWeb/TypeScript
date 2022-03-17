import { useState, useEffect } from 'react'
import {Router} from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import ShowInfo from './components/showInfo'

import { remove } from './api/products'
import { IProduct } from './api/types/products'




function App() {
  // const [products,setProducts] = useState<IProduct>(data)
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const getProudcts = async () => {
      const reponse = await fetch('http://localhost:8000/api/products');
      const data = await reponse.json();
      setProducts(data);
    }
    getProudcts()
  }, [])

  const removeItem = (id :number) =>{
    remove(id)
  }

  return (
    <div className="App">
      <ShowInfo name="Lê Văn Vương" age={19} />
      {products.map(item => {
        return <div>{item.name} <button onClick={()=>removeItem(item._id)}>Remove</button></div>
      })}
      <header>
       <ul>
         <li></li>
         <li></li>
         <li></li>
       </ul>
     </header>
    </div>

    // 
  )
}

export default App
