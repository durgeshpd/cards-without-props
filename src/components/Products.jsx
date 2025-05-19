import React from 'react';
import Card from './Card';

const Products = () => {
  const products = [
    {
      name: 'Laptop',
      price: '₹56,000',
      imageUrl: 'https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      name: 'Smartphone',
      price: '₹25,000',
      imageUrl: 'https://images-cdn.ubuy.co.in/67dbf371b33de32d82629297-simple-mobile-hmd-vibe-64gb-black.jpg',
    },
    {
      name: 'Headphones',
      price: '₹4,000',
      imageUrl: 'https://www.addmecart.com/wp-content/uploads/2023/08/123-235.png',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
