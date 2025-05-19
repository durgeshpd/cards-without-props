import React from 'react';

const Card = () => {
  return (
    <div className=' bg-gray-100 min-h-screen p-10 font-sans'>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 hover:scale-105 transition-transform">
          <img
            src="https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg"
            alt="Laptop"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2">Laptop</h3>
            <p className="text-green-600 font-bold">₹56,000</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 hover:scale-105 transition-transform">
          <img
            src="https://images-cdn.ubuy.co.in/67dbf371b33de32d82629297-simple-mobile-hmd-vibe-64gb-black.jpg"
            alt="Smartphone"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2">Smartphone</h3>
            <p className="text-green-600 font-bold">₹25,000</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 hover:scale-105 transition-transform">
          <img
            src="https://www.addmecart.com/wp-content/uploads/2023/08/123-235.png"
            alt="Headphones"
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold mb-2">Headphones</h3>
            <p className="text-green-600 font-bold">₹4,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
