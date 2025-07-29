import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCart, StarIcon, ArrowLeft } from 'lucide-react';
import { CartContext } from '../Context/CartContext';
import Loading from './Loading';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { getaddToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);
      } catch (err) {
        setError('Failed to fetch product details.');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <p className="text-center pt-20 text-xl font-semibold">
        <Loading />
      </p>
    );

  if (error)
    return <p className="text-center pt-20 text-red-600 font-semibold">{error}</p>;

  if (!product) return null;

  return (
    <div className="pt-24 container mx-auto px-6 max-w-5xl">
     <button
  onClick={() => navigate(-1)}
  className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition px-4 py-2 rounded-md mb-6 shadow"
>
  <ArrowLeft className="w-5 h-5" />
  Back to Products
</button>


      {/* العنوان */}
     <div className="flex justify-center">
  <h2
    className="text-3xl font-bold mb-6 text-blue-600 relative inline-block
               after:block after:w-16 after:h-1 after:bg-blue-600 after:rounded after:mt-2 after:mx-auto"
  >
    Product Details
  </h2>
</div>

      {/* تفاصيل المنتج */}
      <div className="flex flex-col md:flex-row gap-12 bg-white dark:bg-gray-900 border rounded-xl shadow-lg p-6 md:p-8">
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 w-auto object-contain rounded-lg"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-between">
         <h4 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-600 dark:text-blue-400">
  {product.title.split(' ', 3).join(' ')}
</h4>

          <div className="space-y-5">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>

            <p className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
              ${product.price}
            </p>

            <p className="capitalize text-sm text-gray-500 dark:text-gray-400">
              Category: {product.category}
            </p>

            {product.rating && (
              <div className="flex items-center gap-2 text-yellow-400">
                <span className="font-semibold">{product.rating.rate}</span>
                <StarIcon className="w-5 h-5" />
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  ({product.rating.count} reviews)
                </span>
              </div>
            )}
          </div>

          <button
            type="button"
            className="mt-6 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-md text-base md:text-lg"
            onClick={() => getaddToCart(product.id)}
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
