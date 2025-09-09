import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden brightness-100 ' style={{
            backgroundImage: "url('./bg.jpg')"
        }} id='Header' >
            <Navbar />
            <div className='container text-left mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 '>Welcome To BBQ Restaurant Texas</h2>
                <p className='mt-4 max-w-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in  eros elementum tristique. Duis cursus,
                    mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                <div className='space-x-6 mt-16'>
                    <a href="" className='border border-white bg-orange-500 font-bold text-black px-8 py-3 rounded hover:bg-white'>Reserve Now</a>
                </div>
            </div>
        </div>
    )
}

export default Header
