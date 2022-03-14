import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Products from './components/Products'
import ShowInfo from './components/showInfo'

interface IProduct {
  id:number,
  name:string
}

const data = [
  {id: 1, name :"Product A"},
  {id: 2, name :"Product B"},
  {id: 3, name :"Product C"},
]
  


function App() {
  const [count, setCount] = useState(0)
  const [products,setProducts] = useState<IProduct>(data)


  return (
    <div className="App">
      <ShowInfo name="Lê Văn Vương" age={19} />
      {products.map(item => <Products data={item}/>)}
    </div>
  )
}

export default App
