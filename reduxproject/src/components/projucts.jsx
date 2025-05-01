import React from 'react';
import { useState, useEffect } from 'react';
import { ShoppingCart, Star, StarHalf } from 'lucide-react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(data => data.json())
      .then(result => setProducts(result));
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} size={16} className="text-yellow-400 fill-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" size={16} className="text-yellow-400 fill-yellow-400" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} size={16} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
      <div className="text-2xl font-bold mb-6 text-center">Products</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {products.map(product => (
          <div key={product.id} className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img
                src={product.image || "/api/placeholder/400/320"}
                alt={product.title}
                className="object-contain h-full w-full transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                {product.category}
              </div>
            </div>
            
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 h-14">
                {product.title}
              </h2>
              
              <div className="mt-2 flex items-center">
                <div className="flex">
                  {product.rating && renderStars(product.rating.rate)}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating && `(${product.rating.count} reviews)`}
                </span>
              </div>
              
              <p className="mt-3 text-gray-600 text-sm line-clamp-2">
                {product.description}
              </p>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price && product.price.toFixed(2)}
                </span>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors duration-300 flex items-center justify-center">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}