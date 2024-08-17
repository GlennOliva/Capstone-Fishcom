import React from 'react'
import { Route, Routes } from 'react-router'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Ecommerce from './e-commerce/Home'
import EcommerceNavbar from './e-commerce/Navbar'
import EcommerceFooter from './e-commerce/Footer'
import Product from './e-commerce/Product'
import Cart from './e-commerce/Cart'


const App = () => {
  return (
   
    <div>
      <Routes>

      <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/ecommerce" element={
          <>
            <EcommerceNavbar />
            <Ecommerce />
            <EcommerceFooter/>
          </>
        } />

<Route path="/product" element={
          <>
            <EcommerceNavbar />
            <Product />
            <EcommerceFooter/>
          </>
        } />

<Route path="/cart" element={
          <>
            <EcommerceNavbar />
            <Cart />
            <EcommerceFooter/>
          </>
        } />
      </Routes>
    </div>
  )
}

export default App