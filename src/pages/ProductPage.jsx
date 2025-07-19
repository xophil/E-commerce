// pages/ProductPage.jsx
import { useParams } from 'react-router-dom';
import products from '../data/product';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../App.css'
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";


function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="p-4 text-red-500">Product not found</div>;

  const images = [product.image, product.image2, product.image3];
const [current, setCurrent] = useState(0);

  return (
    <>
    
    {/**==========================HEADER============================ */}
      <header className='header'>
        <div id="header-container" className="flex flex-col md:flex-row justify-center items-center gap-3 p-4">
            
            <div className="flex items-center justify-between w-full md:w-auto">
                <Link to='/'><img src="../public/icons/logo.png" alt="logo" className="w-[150px]" /></Link>
                <button id="user-btn" className="px-5 py-2 rounded-3xl bg-gray-200 hover:bg-gray-300 md:hidden"><img src="../public/icons/user.png" alt="" /></button>
            </div>
            
            <form action="" className="flex flex-row items-center gap-2 w-full md:w-auto bg-white rounded-md p-2">

                <input 
                type="text" 
                name="Search" 
                placeholder='Search for item or brand' 
                id="input-button" 
                className="p-2 rounded-md w-full md:w-96 text-black bg-white"
                />
                
                <button className='bg-white px-4 rounded-3xl cursor-pointer'><FiSearch/></button>


            </form>
         <div className="hidden md:flex gap-4 items-center">
            <button id='user-btn' className="px-5 py-2 rounded-3xl bg-gray-200 hover:bg-gray-300">
                Log In
            </button>
            <button id='cart-btn-desktop' className="px-4 py-3 rounded-3xl bg-gray-200 hover:bg-gray-300">
                <FiShoppingCart/>
            </button>
            </div>

            {/* Mobile view - fixed bottom right */}
            <button
            id='cart-btn-mobile'
            className="fixed bottom-4 right-4 p-5 rounded-full shadow-lg md:hidden"
            >
                <FiShoppingCart/>
            </button>
        </div>
      </header>
        {/**==========================HEADER ENDS HERE============================ */}
    
    
    
    
    
    
     <div className="flex flex-col md:flex-row gap-8 p-4 md:p-6 max-w-6xl mx-auto items-start relative">

                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  {/* Image Slider */}
                  <div className="relative aspect-square w-full mb-4">
                    {/* Left Arrow */}
                    <button
                      onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
                    >
                      <HiArrowSmallLeft size={24} />
                    </button>

                    {/* Image Container */}
                    <div className="w-full h-full flex items-center justify-center rounded-xl overflow-hidden border border-gray-300">
                      <img
                        src={images[current]}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain transition duration-300"
                      />
                    </div>

                    {/* Right Arrow */}
                    <button
                      onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
                    >
                      <HiArrowSmallRight size={24} />
                    </button>
                  </div>

                  {/* ⬇️ Desktop Buttons Below Image */}
                  <div className="hidden md:flex gap-4 mt-4">
                    <button id='item-button-1' className="flex-1 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                      Add to Cart
                    </button>
                    <button id='item-button-2' className="flex-1 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                      Buy Now
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="w-full md:w-1/2">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                  <p className="text-gray-700 mb-4 leading-relaxed">{product.description}</p>
                  <p className="text-gray-700 mb-4 leading-relaxed">Warranty: {product.warranty}</p>
                  <p className="text-2xl font-semibold text-blue-600 mb-6">Rs. {product.price}</p>
                </div>

                {/* 📱 Sticky Mobile Buttons */}
                <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex md:hidden justify-around px-4 py-3 shadow-md z-50">
                  <button id='item-button-1' className="flex-1 mr-2 py-3 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">
                    Add to Cart
                  </button>
                  <button id='item-button-2' className="flex-1 ml-2 py-3 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition">
                    Buy Now
                  </button>
                </div>
</div>


    </>
    
  );
}

export default ProductPage;
