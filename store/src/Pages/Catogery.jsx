import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from '../Component/Loading';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from "../Context/CartContext";

export default function Category() {
  const { getaddToCart ,disabled} = useContext(CartContext);

  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const { data: categoriesData } = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(categoriesData);

        const { data: productsData } = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setAllProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  function handleCategoryClick(category) {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter(p => p.category === category));
    }
  }

  const topFourCategories = categories.slice(0, 4);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="p-4 min-h-screen">
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={() => handleCategoryClick("all")}
          className={`capitalize px-4 py-2 rounded font-semibold transition
            ${
              activeCategory === "all"
                ? "bg-blue-800 text-white shadow-lg"
                : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }
            hover:bg-blue-500 hover:text-white
          `}
        >
          All
        </button>
        {topFourCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`capitalize px-4 py-2 rounded font-semibold transition
              ${
                activeCategory === cat
                  ? "bg-blue-800 text-white shadow-lg"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              }
              hover:bg-blue-500 hover:text-white
            `}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 p-3 rounded shadow-md text-sm flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 object-contain mb-2"
            />
            <div className="font-medium truncate text-center">{product.title.split(" ", 3).join(" ")}</div>
            <div className="text-blue-800 dark:text-blue-600 font-bold mt-1">
              ${product.price}
            </div>
           <button
        onClick={() => getaddToCart(product.id, 1)}
  className="mt-3 w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    aria-label="Add to cart"
    >
  <ShoppingCart className="w-5 h-5" />
  Add to Cart
</button>

          </div>
        ))}
      </div>
    </div>
  );
}
