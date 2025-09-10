import React from 'react'
import logo from "../assets/Logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";


function Footer() {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32  bg-black w-full overflow-hidden' id='footer'>
            <div className='container  mx-auto flex flex-col md:flex-row justify-between items-center '>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={logo} alt="" />
                    <p className='text-white mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis vel,
                        saepe voluptates voluptatem tenetur numquam blanditiis laudantium dolorum?
                        Recusandae, itaque facere vel dolore magnam amet a ullam dolor ducimus.</p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className=' flex flex-col gap-2 text-white'>
                        <a href="#Header" className=' hover:text-orange-500'>Home</a>
                        <a href="#About" className='  hover:text-orange-500'>About us</a>
                        <a href="#Contact" className=' hover:text-orange-500'>Contact</a>
                        <a href="#" className=' hover:text-orange-500'>Privacy Policy</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Channel.</h3>
                    <p className='text-white max-w-80 mb-4'> The latest receipe , dishes and delicious spicy items and Texas</p>
                    <h3 className='text-white text-lg font-bold mb-4'>Let's connect to our social media platforms.</h3>
                    <div className="flex gap-6 mt-4  text-white">
                        <a href="#" className="hover:text-orange-500 text-2xl">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-orange-500 text-2xl">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-orange-500 text-2xl">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-orange-500 text-2xl">
                            <FaGithub />
                        </a>
                        <a href="#" className="hover:text-orange-500 text-2xl">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="hover:text-orange-500 text-2xl">
                            <FaWhatsapp />
                        </a>

                    </div>

                </div>
            </div>
            <div className='border-t border-white py-4 mt-10 text-center text-white'>
                Copyright © 2025 BBQ Restaurant. All Rights Reserved.
            </div>
        </div>
    )

}

export default Footer
