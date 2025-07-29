import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext';  
import { Link } from 'react-router-dom';
import { ShoppingCart, Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="bg-gray-800  text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold" aria-label="Go to home">
          <ShoppingCart className="text-blue-400 w-7 h-7 mr-2" />
          Store
        </Link>

        {/* Desktop Links */}
        <ul className="hidden sm:flex gap-6 items-center text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="hover:text-blue-600 transition-colors duration-200">
              Products
            </Link>
          </li>
          <li>
            <Link to="/catogery" className="hover:text-blue-600 transition-colors duration-200">
              Category
            </Link>
          </li>
        </ul>

        {/* Right section (cart, dark mode, menu) */}
        <div className="flex items-center gap-4 relative">
          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200 relative"
            aria-label="Go to cart"
          >
            <ShoppingCart size={20} />
            <span className="hidden sm:inline">Cart</span>

            {/* Cart quantity badge */}
            {totalItems > 0 && (
              <span
                className="
                  absolute -top-2 -left-3
                  bg-blue-600 text-white
                  dark:bg-blue-800
                  text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold select-none
                "
              >
                {totalItems}
              </span>
            )}
          </Link>

          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="bg-gray-700 p-1 rounded-full hover:bg-gray-600 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-300" />
            )}
          </button>

          {/* Menu Icon (Mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col bg-gray-800 px-4 py-4 gap-3 text-sm font-medium">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block px-2 py-2 hover:text-blue-600 rounded"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              onClick={() => setMenuOpen(false)}
              className="block px-2 py-2 hover:text-blue-600 rounded"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/catogery"
              onClick={() => setMenuOpen(false)}
              className="block px-2 py-2 hover:text-blue-600 rounded"
            >
              Category
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
