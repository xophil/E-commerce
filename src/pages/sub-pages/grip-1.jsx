import { Link } from 'react-router-dom';
import '../../App.css'

import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

function Grip1(){
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
        </>
    )
}


export default Grip1