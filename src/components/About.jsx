import React from 'react'
import img_1 from "../assets/img-1.jpg";
import Card from './Card.jsx'


function About() {
    return (
        <>
            <div
                className="flex flex-col md:flex-row items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full bg-black text-white overflow-hidden"
                id="About"
            >
                {/* Left Side Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={img_1}
                        alt="About"
                        className="w-full md:w-[600px] lg:w-[700px] xl:w-[800px] h-[300px] md:h-[400px] lg:h-[500px]  object-cover rounded-lg"
                    />
                </div>

                {/* Right Side Text */}
                <div className="flex-1 mt-10 md:mt-0 md:ml-10 text-center md:text-left">
                    <h2 className="text-orange-500 text-2xl sm:text-4xl font-bold mb-2">
                        About
                    </h2>
                    <h2 className="text-3xl sm:text-6xl md:text-[82px]pt-5">
                        We Serve Tasty Grilled Goodness!
                    </h2>
                    <p className="mt-4 max-w-2xl">
                        Figma ipsum component variant main layer. Asset bullet project prototype
                        draft main. Content vertical figjam slice pixel undo bold draft ipsum
                        underline. Select clip prototype flows content. Scrolling inspect scale
                        auto frame opacity. Community opacity
                    </p>
                    <div className="mt-10">
                        <a
                            href="#"
                            className="border border-white bg-orange-500 font-bold text-black px-8 py-3 rounded hover:bg-white"
                        >
                            Learn More...
                        </a>
                    </div>
                </div>
            </div>
            <div>
              <Card/>
            </div>

        </>
    )
}

export default About

