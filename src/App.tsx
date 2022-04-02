import { useState, useEffect } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Products from './components/Products'
// import "bootstrap/dist/css/bootstrap.min.css";

import { add, remove, update } from './api/products'
import { IProduct } from './types/products'
import WebsiteLayout from './pages/layout/WebsiteLayout'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import AdminLayout from './pages/layout/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductManager from './pages/ProductsManager'
import ProductAdd from './pages/AddProducts';
import Header from './components/Header';
import EditProduct from './pages/layout/EditProduct';
import Sigin from './pages/layout/Sigin';
import Sigup from './pages/layout/Sigup';
import { AboutPage } from './pages/AboutPage'
import CartPage from './pages/CartPage'
import ProductsPage from './pages/ProductsPage'

function App() {
  // const [products,setProducts] = useState<IProduct>(data)
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const getProudcts = async () => {
      const reponse = await fetch('http://localhost:3001/products');
      const data = await reponse.json();
      setProducts(data);
    }
    getProudcts()
  }, [])

  const removeItem = (id: number) => {
    //call api
    remove(id);
    //rêRender
    setProducts(products.filter(item => item.id !== id))
  }

  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }

  const onHnadleUpdate = async (product: IProduct) => {
    const { data } = await update(product);
    console.log(data);
    setProducts(products.map(item => item.id == data.id ? data : item));
  }
  return (
    <div className="App font-mono">
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home products={products} />} />
            <Route path='products'>
              <Route index element={<ProductsPage products={products}/>} />
              <Route path=':id' element={<ProductDetail />} />
            </Route>
            <Route path='sigin' element={<Sigin />} />
            <Route path='sigup' element={<Sigup />} />
            <Route path='about' element={<AboutPage/>} />
            <Route path='cart' element={<CartPage/>} />
          </Route>
          <Route path="*" element={<WebsiteLayout />} />
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ProductManager onRemove={removeItem} products={products} />} />
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
              <Route path=":id/edit" element={<EditProduct onUpdate={onHnadleUpdate} />} />
            </Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App

