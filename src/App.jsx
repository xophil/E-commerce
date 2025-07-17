import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Bestseller from './pages/bestsellers';
import Grip1 from './pages/sub-pages/grip-1';
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
        <Route path="/grip-1" element={<Grip1/>}/>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
