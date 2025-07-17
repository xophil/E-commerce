import { Link } from 'react-router-dom';
import '../App.css'
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import category from '../data/categories';

function Home(){
    return(
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














      {/**==========================HEADER============================ */}
      <div>
        {/**BEST SELLERS */}
           <div
            id="best-sellers"
            className="bg-[#2874f0] rounded-[20px] p-6 m-10 mx-30 hidden md:flex flex-row items-center justify-between">
            {/* Text */}
            <div className="text-white mr-6">
                <h1 className="text-6xl font-bold">BEST SELLERS</h1>
                <h2 className="text-3xl mt-1">Buy Them Now</h2>
                <button id="shop" className="mt-4 bg-[#ecf7f4] text-[#2874f0] font-semibold px-6 py-3 rounded-lg">
                <Link to="/bestsellers">Shop Now</Link>
                </button>
            </div>

            {/* Image */}
            <div className="max-w-[300px] md:max-w-[400px]">
                <img
                src="../public/icons/banner.png"
                alt="sports banner"
                className="w-full object-contain"
                />
            </div>
        </div>









        {/**ITEM CATEGORIES */}
        
        <div className="mx-4 md:mx-30 my-10 bg-gray-100 p-4 rounded-md">
        <h1 className="font-bold text-[24px] md:text-[30px] underline">SPORTS GEAR & WEAR</h1>



            {/**=================================================THIS DISPLAYS ALL THE CATEGORIES====================================== */}

            <div id="body" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                {category.map((category) => (
                <div key={category.slug} className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                    <Link to={`/category/${category.slug}`}>
                    <img
                        src={category.image}
                        alt={category.title}
                        className="h-50% w-full object-cover rounded"
                    />
                    <h1 className="text-lg font-semibold mt-2">{category.title}</h1>
                    </Link>
                </div>
                ))}
            </div>
        </div>






      </div>







      {/**==========================FOOTER============================ */}
      <div>
        {/**INFORMATION*/}
        <div className="mx-4 md:mx-30 my-10 bg-gray-100 p-4 rounded-md">
            <h1 className=''>CONTACTS</h1>
            <hr />

            <br />
            <h2><span className='underline'>Phone Number:</span> +977 9761720638</h2>
            <h2><span className='underline'>Email:</span> sophilsthapit01@gmail.com</h2>
        </div>
      </div>
        </>
    )
}



export default Home

























 {/**====================ITEMS FROM HERE ======================= 
            <div className="m-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-[200px]">

                <img src="../public/items/grip/black 1.jpg" alt="item" className="h-[150px] w-full object-cover rounded"/>
                <h1 className="text-lg font-semibold mt-2">Name</h1>
                <div className="flex justify-between items-center mt-2">
                    <h2 className="text-gray-700 font-medium">Rs. 999</h2>
                    <button id="item-button" className="text-white px-3 py-1 rounded-full text-sm hover:bg-[#1a5edc] transition">
                    + Add
                    </button>
                </div>
            </div>
                *====================ITEMS TO HERE ======================= */}