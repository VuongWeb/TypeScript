import { useState, useEffect } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Products from './components/Products'

import { add, list, remove, update } from './api/products'
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
import { AboutPage } from './pages/AboutPage'
import CartPage from './pages/CartPage'
import ProductsPage from './pages/ProductsPage'
import { ICate } from './types/cate'
import { listCate } from './api/category'
import CateProductsPage from './pages/CateProductsPage'
import CateManager from './pages/CateManager'

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<ICate[]>([])


  // useEffect
  useEffect(() => {
    const getProudcts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProudcts();
    const getCategories = async () => {
      const { data } = await listCate();
      setCategories(data)
    }
    getCategories();
  }, [])


  ///remmove
  const removeItem = (id: number) => {
    //call api
    remove(id);
    //rêRender
    setProducts(products.filter(item => item._id !== id))
  }

  const removeCate = (id:number) =>{
    removeCate(id);
    setCategories(categories.)
  }

  //add
  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }


  //update
  const onHnadleUpdate = async (product: IProduct) => {
    const { data } = await update(product);
    // console.log(data);
    setProducts(products.map(item => item._id == data._id ? data : item));
  }

  return (
    <div className="App font-mono">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home products={products} />} />
          <Route path='products'>
            <Route index element={<ProductsPage categories={categories} products={products} />} />
            <Route path=':id' element={<ProductDetail categories={categories} />} />
          </Route>
          <Route path='/category/:slug' element={<CateProductsPage products={products} categories={categories} />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
        <Route path="*" element={<WebsiteLayout />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductManager onRemove={removeItem} products={products} />} />
            <Route path="add" element={<ProductAdd categories={categories} onAdd={onHandleAdd} />} />
            <Route path=":id/edit" element={<EditProduct onUpdate={onHnadleUpdate} />} />
          </Route>
          <Route path='categories' element={<CateManager listcate={categories} onRemove={ } />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

