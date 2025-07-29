import React, { useContext } from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

export default function Card({ item }) {
  const { getaddToCart } = useContext(CartContext);

  return (
    <div
      data-aos="fade-up"
      className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden p-4 transition-transform hover:scale-105 duration-300 cursor-pointer"
    >
      <div className="relative group overflow-hidden">
        <img
          src={item.image || 'default.jpg'}
          alt={item.title}
          className="w-full h-64 object-cover"
        />

        {/* أيقونات عائمة - تظهر فقط على الشاشات الكبيرة */}
        <div className="icon gap-2 absolute bottom-[-40px] left-1/2 -translate-x-1/2 group-hover:bottom-[50%] transition-all duration-300 hidden sm:flex">
          <Heart
            className="bg-blue-500 p-1 rounded-full shadow-md cursor-pointer text-white hover:bg-blue-600 transition-colors duration-200"
            aria-label="Add to favorites"
          />
          <button
            onClick={() => getaddToCart(item.id, 1)}
            className="disabled:cursor-not-allowed"
            aria-label="Add to cart"
          >
            <ShoppingCart
              className="bg-blue-500 text-white p-1 cursor-pointer rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200"
            />
          </button>
          <Link
            to={`/ProductDatels/${item.id}`}
            aria-label={`View details of ${item.title}`}
          >
            <Eye className="bg-blue-500 text-white p-1 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-200" />
          </Link>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="text-md font-semibold line-clamp-2 text-black dark:text-white">
          {item.title.split(" ", 3)?.join(" ")}
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
          {item.category}
        </span>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="text-black dark:text-white font-bold">${item.price}</span>
        <p className="flex items-center gap-1 text-yellow-500">
          <Star />
          <span className="text-black dark:text-white">{item.rating?.rate}</span>
        </p>
      </div>

      {/* أزرار تظهر فقط في الموبايل */}
      <div className="flex flex-col sm:hidden gap-2 mt-4">
        <button
          onClick={() => getaddToCart(item.id, 1)}
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
           Add To Cart 
        </button>
        <Link
          to={`/ProductDatels/${item.id}`}
          className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white py-2 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          Show Details
        </Link>
      </div>
    </div>
  );
}
