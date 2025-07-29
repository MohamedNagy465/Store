import React, { useContext } from "react"; 
import { CartContext } from "../Context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
      const navigate = useNavigate();

  const {
    cart,
    removeItemcart,
    clearCart,
    updateCartItem,
    disabled,
  } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto my-10 px-4 max-w-4xl ">
      <div className="flex justify-center">
        <h2
          className="text-3xl font-bold mb-6 text-blue-600 relative inline-block
                     after:block after:w-16 after:h-1 after:bg-blue-600 after:rounded after:mt-2 after:mx-auto"
        >
          Your Cart
        </h2>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <div className="flex justify-center mb-6">
            <ShoppingCart className="w-20 h-20 text-blue-400 animate-bounce" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Your cart is empty
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Looks like you haven’t added any products yet.
          </p>
            <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow transition duration-200"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <ul className="space-y-6">
            {cart.map(({ productId, product, quantity }) => (
              <li
                key={productId}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border rounded-lg shadow-md bg-blue-50 dark:bg-blue-900"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full sm:w-20 h-40 sm:h-20 object-contain rounded"
                />
                <div className="flex-1 w-full text-center sm:text-left">
                  <h3 className="font-semibold text-lg">{product.title}</h3>
                  <p className="text-blue-600 font-bold text-xl">${product.price}</p>
                </div>

                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <button
                    disabled={disabled}
                    onClick={() => {
                      if (quantity - 1 < 1) {
                        removeItemcart(productId);
                      } else {
                        updateCartItem(productId, quantity - 1);
                      }
                    }}
                    className="bg-blue-200 text-blue-800 px-4 py-2 rounded disabled:cursor-not-allowed"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>

                  <span className="text-lg font-semibold">{quantity}</span>

                  <button
                    disabled={disabled}
                    onClick={() => updateCartItem(productId, quantity + 1)}
                    className="bg-blue-200 text-blue-800 px-4 py-2 rounded disabled:cursor-not-allowed"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItemcart(productId)}
                  className="text-blue-600 hover:text-red-700 font-semibold mt-4 sm:mt-0"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <button
              onClick={clearCart}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-red-500 hover:to-red-700 text-white py-3 px-8 rounded w-full sm:w-auto"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
