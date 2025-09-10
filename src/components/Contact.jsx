import React from 'react'
import white_arrow from "../assets/white-arrow.png"


function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ad2d8e4d-8ffc-456b-9d1f-44732d1b704d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
           <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-6 py-12"
      id="Contact"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700">
        {/* Left Side - Form */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500 mb-2">Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            We'd love to hear from you! Fill out the form below or reach us directly.
          </p>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Write your message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Enter your message"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-2 rounded-lg transition duration-300 flex items-center justify-center gap-2"
            >
              Submit Now <img src={white_arrow} alt="" className="w-4" />
            </button>
          </form>

          <span className="block text-green-400 mt-4">{result}</span>
        </div>

        {/* Right Side - Map + Contact Info */}
        <div className="flex flex-col gap-6">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0913414228815!2d67.00113631500255!3d24.86073498405439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eaa1b1c123d%3A0x2e7e72e3d3fba163!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1632483857894!5m2!1sen!2s"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg border border-gray-700"
          ></iframe>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-bold mb-3 text-orange-400">Contact Info</h3>
            <p className="mb-2">📍 Karachi, Pakistan</p>
            <p className="mb-2">📞 +92 300 1234567</p>
            <p className="mb-2">✉️ info@bbqrestaurant.com</p>
           
          </div>
        </div>
      </div>
    </div>

        </>
    )
}

export default Contact


// <div
//             className="min-h-screen flex items-center justify-center bg-black px-4 p-10"
//             id="Contact"
//         >
//             <div className="w-full max-w-lg bg-gray-900 p-8 rounded-2xl shadow-lg">
//                 <h2 className="text-3xl font-bold text-center text-white mb-6">
//                     Contact Us
//                 </h2>

//                 <form onSubmit={onSubmit} className="space-y-5">
//                     <div>
//                         <label className="block text-gray-300 mb-2">Your Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Enter your name"
//                             required
//                             className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-gray-300 mb-2">Phone Number</label>
//                         <input
//                             type="tel"
//                             name="phone"
//                             placeholder="Enter your mobile number"
//                             required
//                             className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-gray-300 mb-2">Write your message</label>
//                         <textarea
//                             name="message"
//                             rows="6"
//                             placeholder="Enter your message"
//                             required
//                             className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                         ></textarea>
//                     </div>

//                     <button
//                         type="submit"
//                         className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-2 rounded-lg transition duration-300 flex items-center justify-center gap-2 mx-auto"
//                     >
//                         Submit Now <img src={white_arrow} alt="" className="w-4" />
//                     </button>
//                 </form>

//                 <span className="block text-center text-green-400 mt-4">{result}</span>
//             </div>
//         </div>