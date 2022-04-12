import React from 'react'
import { Link, NavLink } from 'react-router-dom'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div>
      {/* <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="">
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/admin/products/add">
                Add Products
              </NavLink>
            </li>
          </ul>
        </div>
      </nav> */}

      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <Link to="/admin/dashboard" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</Link>
          <Link to="/admin/products" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">List Products</Link>
          <Link to="/admin/categories" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Categories</Link>
          <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Back to Website</Link>
        </div>
      </div>
    </div>

  )
}

export default Sidebar