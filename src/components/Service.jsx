import React from 'react'
import ser_1 from "../assets/s-1.avif"
import ser_2 from "../assets/s-2.avif"

function Service() {
    return (
        <div>
            <div
                className="flex flex-col lg:flex-row items-center justify-center container mx-auto p-6 sm:p-10 md:px-20 lg:px-32 w-full bg-black text-white overflow-hidden"
                id="Service"
            >
                {/* Left Side Image */}
                <div className="flex-1 flex flex-col lg:flex-row gap-5 w-full">
                    <img
                        src={ser_1}
                        alt=""
                        className="w-full sm:w-full lg:w-[650px] h-[250px] sm:h-[300px] lg:h-[350px] object-cover rounded-2xl"
                    />
                    <img
                        src={ser_2}
                        alt=""
                        className="w-full sm:w-full lg:w-[650px] h-[250px] sm:h-[300px] lg:h-[350px] object-cover rounded-2xl"
                    />
                </div>
                {/* Right Side Text */}
                <div className="flex-1 mt-10 md:mt-0 md:ml-10 text-center md:text-left">
                    <h2 className="text-orange-500 text-2xl sm:text-4xl font-bold mb-2">
                        Why Us
                    </h2>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl pt-5 ">
                        We Offer The Best BBQ In All of Texas
                    </h2>
                    <p className="mt-4 max-w-6xl pt-5">
                        An extremely detailed and comprehensive description goes here,
                        providing an extensive amount of information about the topic
                    </p>
                    <ul className='pt-5 gap-7 text-2xl'>
                        <li>High Quality meat</li>
                        <li>Organic Meat and Ingredients</li>
                        <li>Best Service in Texas</li>
                    </ul>
                </div>
            </div>
            <div className=' relative min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden brightness-100 ' style={{
                backgroundImage: "url('./images.webp')"
            }}  >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
                <div className=' absolute inset-0 mt-5 container mx-auto py-4 px-6 md:px-20 lg:px-32 text-white flex flex-col items-center justify-center text-center'>

                    <h2 className='text-2xl sm:text-4xl md:text-5xl inline-block max-w-3xl pt-20 font-bold'>
                        Reserve Your Table for an Unforgettable BBQ Experience!
                    </h2>

                    <p className='mt-4 max-w-2xl text-sm sm:text-base md:text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique. Duis cursus,
                        mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>

                    <div className='mt-8'>
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
        </div>

    )
}

export default Service
