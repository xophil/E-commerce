import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Bestseller from './pages/bestsellers';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import product from './data/product';
import category from './data/categories'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bestsellers" element={<Bestseller/>}/>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
