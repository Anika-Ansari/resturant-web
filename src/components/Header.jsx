import React from 'react'
import Navbar from './Navbar'


function Header() {
    return (
        <div className=' relative min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden brightness-100' style={{
            backgroundImage: "url('./bg.jpg')"
        }} id='Header' >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
            <Navbar />
            <div className=' absolute inset-0 mt-20 container text-left mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                <h2 className='text-3xl sm:text-5xl md:text-[82px] inline-block max-w-3xl pt-20'>
                    Welcome To BBQ Restaurant Texas
                </h2>
                <p className='mt-4 max-w-2xl text-sm sm:text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis cursus,
                    mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
                <div className='space-x-6 mt-10'>
                    <a
                        href="#"
                        className='border border-white bg-orange-500 font-bold text-black 
               px-4 py-2 sm:px-6 sm:py-3 
               rounded hover:bg-white 
               text-sm sm:text-base inline-block'
                    >
                        Reserve Now
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Header
