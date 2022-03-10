import { useState } from 'react'
import './App.css'
import ShowInfo from './components/ShowInfo'


function App() {
  // const [count, setCount] = useState(0)

  const [products,setproducts] =useState([
    {
      name:'products A',
      age:18
    },
    {
      name:'products B',
      age:18
    },
    {
      name:'products C',
      age:18
    },
  ])

  const [status,setStatus] = useState(false);
  const [count,setCount] = useState(0);

  return (
    <div className="App">
      Count: {count}
      <button onClick={()=>setCount(count+1)}>click</button>
      <hr />
      <button onClick={()=>setStatus(!status)}>Toggled</button>
      <hr />
      {status ? products.map((item,i)=> <div key={i}>{item.name}</div>) :""}
      <ShowInfo name="Vuong"/>
      <ShowInfo name="Long"/>
      <ShowInfo name="Dat"/>
    </div>
  )
}

export default App
