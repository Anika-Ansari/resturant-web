import React from 'react'

function Card() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-black px-10 py-14">
  {/* Card 1 */}
  <div className="bg-[#0d1515] text-white p-6 rounded-lg">
    <p className="text-orange-500 font-medium">01</p>
    <h3 className="text-xl font-semibold mt-2">Location</h3>
    <p className="text-gray-300 mt-2">
      2972 Westheimer Rd. Santa Ana, Illinois 85486
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-[#0d1515] text-white p-6 rounded-lg">
    <p className="text-orange-500 font-medium">02</p>
    <h3 className="text-xl font-semibold mt-2">Phone</h3>
    <p className="text-gray-300 mt-2">(303) 555-0105</p>
  </div>

  {/* Card 3 */}
  <div className="bg-[#0d1515] text-white p-6 rounded-lg">
    <p className="text-orange-500 font-medium">03</p>
    <h3 className="text-xl font-semibold mt-2">Email</h3>
    <p className="text-gray-300 mt-2">mail@example.com</p>
  </div>

  {/* Card 4 */}
  <div className="bg-[#0d1515] text-white p-6 rounded-lg">
    <p className="text-orange-500 font-medium">04</p>
    <h3 className="text-xl font-semibold mt-2">Working Hours</h3>
    <p className="text-gray-300 mt-2">
      Mon - Sun <br /> 12.00pm - 01.00am
    </p>
  </div>
</div>
    </div>
  )
}

export default Card
