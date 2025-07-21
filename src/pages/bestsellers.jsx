import { Link } from 'react-router-dom';
import '../App.css'

function Bestseller(){
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





        {/**ITEM CATEGORIES */}

        <div className="mx-4 md:mx-30 my-10 bg-gray-100 p-4 rounded-md">
        <h1 className="font-bold text-[24px] md:text-[30px] underline">BEST SELLERS!!</h1>

            <div id="body" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/badminton.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className="text-lg font-semibold mt-2">Badminton</h1>
                </div>
                {/* ===== ITEM END ===== */}
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/basketball.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className="text-lg font-semibold mt-2">Basketball</h1>
                </div>
                {/* ===== ITEM END ===== */}
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/uno.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className="text-lg font-semibold mt-2">Card Games</h1>
                </div>
                {/* ===== ITEM END ===== */}
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/cricket.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className="text-lg font-semibold mt-2">Cricket</h1>
                </div>
                {/* ===== ITEM END ===== */}
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/cycles.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className="text-lg font-semibold mt-2">Cycles</h1>
                </div>
                {/* ===== ITEM END ===== */}
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/bars.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className="text-lg font-semibold mt-2">Fitness Items</h1>
                </div>
                {/* ===== ITEM END ===== */}
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/football.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className="text-lg font-semibold mt-2">Football</h1>
                </div>
                {/* ===== ITEM END ===== */}
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/dumbells.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className="text-lg font-semibold mt-2">Gym</h1>
                </div>
                {/* ===== ITEM END ===== */}
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/ma.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className="text-lg font-semibold mt-2">Martial Arts</h1>
                </div>
                {/* ===== ITEM END ===== */}
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/pumps.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className="text-lg font-semibold mt-2">Sports Accessories</h1>
                </div>
                {/* ===== ITEM END ===== */}
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/supp-wear.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className="text-lg font-semibold mt-2">Support Wear</h1>
                </div>
                {/* ===== ITEM END ===== */}
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/tt.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className="text-lg font-semibold mt-2">Table Tennis</h1>
                </div>
                {/* ===== ITEM END ===== */}
                {/* ===== ITEM START ===== */}
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer w-full p-4">
                <img
                    src="/items/1-thumbnail/wb.png"
                    alt="item"
                    className="h-50% w-full object-cover rounded"
                />
                <h1 className="text-lg font-semibold mt-2">Water Bottle</h1>
                </div>
                {/* ===== ITEM END ===== */}
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
