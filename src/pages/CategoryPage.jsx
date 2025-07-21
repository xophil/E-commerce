// pages/CategoryPage.jsx
import { useParams } from 'react-router-dom';
import products from '../data/product'; // all your products
import React from 'react';
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';


function CategoryPage() {
  const { slug } = useParams();

  // Filter products that match the category slug
  const filteredProducts = products.filter(
    (product) => product.category === slug
  );

  return (

    <>
    {/**==========================HEADER============================ */}
      <header className='header'>
        <div id="header-container" className="flex flex-col md:flex-row justify-center items-center gap-3 p-4">
            
            <div className="flex items-center justify-between w-full md:w-auto">
                <Link to='/'><img src="/icons/logo.png" alt="logo" className="w-[150px]" /></Link>
                <button id="user-btn" className="px-5 py-2 rounded-3xl bg-gray-200 hover:bg-gray-300 md:hidden"><img src="/icons/user.png" alt="" /></button>
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




        {/**======================================ITEMS===================================== */}


        {/**This is container for the entire columns */}
      <div className='flex flex-col md:flex-row gap-6 p-4'>


        {/**==========================LEFT COLUMN============================ */}

    <div id="filter" className="md:w-1/4 bg-white rounded-md border-1 p-4 mt-9">
    <h2 className="font-bold text-lg mb-8 text-[#2874f0]">Filters</h2>

    <h2 className="text-lg mb-8 text-[#2874f0]">Brands</h2>
    <form className="space-y-4">
        <div className="flex items-center">
        <input id="filter-badminton" type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
        <label htmlFor="filter-badminton" className="ml-2 text-sm font-medium text-gray-700">Badminton</label>
        </div>

        <div className="flex items-center" id="container">
        <input id="filter-basketball" type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
        <label htmlFor="filter-basketball" className="ml-2 text-sm font-medium text-gray-700">Basketball</label>
        </div>

        <div className="flex items-center">
        <input id="filter-gym" type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
        <label htmlFor="filter-gym" className="ml-2 text-sm font-medium text-gray-700">Gym</label>
        </div>
    </form>
    <h2 className="text-lg mb-8 mt-8 text-[#2874f0]">Price</h2>
    </div>






        

        {/**==========================RIGHT COLUMN============================ */}
        {/**ITEM CATEGORIES */}

        {/**==========================BEST SELLERS============================ */}
        <div > {/**This is container for the right side of the page */}
            <div className="mx-4 my-10 bg-gray-100 p-4 rounded-md">
            <div id="body" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/badminton.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className='text-[15px] bg-green-500 md:text-lg'>Bestsellers</h1>
                <h1 className="text-[15px] font-semibold mt-2 md:text-lg">Badminton</h1>
                </div>
                {/* ===== ITEM END ===== */}
            </div>
        </div>















            {/** This is the regular items */}
            <div className="mx-4 my-10 bg-gray-100 p-4 rounded-md">
            <div id="body" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer p-4 rounded-md">
                    <Link to={`/product/${product.id}`}>
                    <div className="w-full h-30 flex items-center justify-center rounded-md md:h-60">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full object-contain"
                        />
                    </div>
                    <h1 className="text-[15px] font-semibold mt-2 md:text-lg">{product.name}</h1>
                    <div className="flex flex-row items-center gap-5 justify-center md:gap-10">
                        <h2 className="text-[15px] mt-2 md:text-md">Rs. {product.price}</h2>
                        <button className="mt-2 border border-[#2874f0] p-2 rounded-md text-[#2874f0] hover:bg-[#2874f0] hover:text-white transition">
                        Add
                        </button>
                    </div>
                    </Link>
                </div>
                ))}
            </div>
            </div>


                    </div>






            </div>

    </>
  );
}

export default CategoryPage;
