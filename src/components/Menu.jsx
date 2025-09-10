import React from 'react'
import dish_1 from '../assets/dish-1.avif'
import dish_2 from '../assets/dish-2.png'
import dish_3 from '../assets/dish-3.avif'
import dish_4 from '../assets/dish-4.avif'


function Menu() {
    return (
        <>
            <div className="flex flex-col md:flex-row  justify-between items-center container bg-black text-white overflow-hidden p-8 gap-4" id='Menu'>
                <h2 className='text-4xl sm:text-6xl md:text-[82px] inline-block max-w-3xl pt-10'>Our Best Selling BBQ Dishes</h2>
                <div className=''>
                    <p className='mt-9 max-w-2xl'> Dishes
                        An extremely detailed and comprehensive description goes here, providing an extensive amount of information about the topic</p>
                    <div className='mt-10'>
                        <a href="" className='border border-white bg-orange-500 font-bold text-black px-8 py-3 rounded hover:bg-white'>Veiw Menu</a>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-black  px-7 py-14">
                        {/* Card 1 */}
                        <div className="text-white p-3 rounded-lg">
                            <img src={dish_1} alt="" className='w-[600px] h-[350px] object-cover rounded-2xl' />
                            <h3 className="text-xl font-semibold mt-2">special Spaghetti
                            </h3>
                            <p className="text-orange-500 font-medium">$20</p>
                        </div>

                        {/* Card 2 */}
                        <div className="text-white p-3 rounded-lg">
                            <img src={dish_2} alt="" className='w-[400px] h-[350px] object-cover rounded-2xl' />
                            <h3 className="text-xl font-semibold mt-2">Grilled Lamb Chops
                            </h3>
                            <p className="text-orange-500 font-medium">$50</p>
                        </div>
                        {/* Card 3 */}
                        <div className="text-white p-3 rounded-lg">
                            <img src={dish_3} alt="" className='w-[400px] h-[350px] object-cover rounded-2xl' />
                            <h3 className="text-xl font-semibold mt-2">Maple Glazed Ribs
                            </h3>
                            <p className="text-orange-500 font-medium">$15</p>
                        </div>
                        {/* Card 4 */}
                        <div className="text-white p-3 rounded-lg">
                            <img src={dish_4} alt="" className='w-[500px] h-[350px] object-cover rounded-2xl' />
                            <h3 className="text-xl font-semibold mt-2">Garlic Butter Steak
                            </h3>
                            <p className="text-orange-500 font-medium">$40</p>
                        </div>
                    </div>

                </div>
            </>
            )
}

            export default Menu;

