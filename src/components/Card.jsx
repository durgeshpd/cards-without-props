import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 hover:scale-105 transition-transform">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-green-600 font-bold">{product.price}</p>
      </div>
    </div>
  );
};

export default Card;
