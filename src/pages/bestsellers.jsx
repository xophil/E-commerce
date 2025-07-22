import { Link } from 'react-router-dom';
import '../App.css'
import product from '../data/product';

function Bestseller(){

    const bestSellers = product.filter(product => product.item === "bestseller")
    return(
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
                
                <input 
                type="submit" 
                id="search-button" 
                value={"Search"}  
                className=" bg-white px-3 py-2 rounded-3xl cursor-pointer"
                 />


            </form>
          <button id='user-btn' className="w-50% md:w-auto px-5 py-2 rounded-3xl bg-gray-200 hover:bg-gray-300 hidden md:block">Log In</button>
          <button id='user-btn' className="w-50% md:w-auto px-5 py-2 rounded-3xl bg-gray-200 hover:bg-gray-300 hidden md:block"><img src="/icons/cart.png" alt="" /></button>
        </div>
      </header>














      {/**==========================HEADER============================ */}
      <div>
            <div className="mx-4 my-10 bg-gray-100 p-4 rounded-md">
            <h2 className="text-2xl font-bold text-[#2874f0] mb-4">Best Sellers</h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                {bestSellers.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer p-4">
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



export default Bestseller
