import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import ProductDetails from './Component/ProductDatels';
import Layout from './Component/Layout';
import Home from './Pages/Home';
import Category from './Pages/Catogery';
import CartContextProvider from './Context/CartContext';
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "product", element: <Product /> },
        { path: "cart", element: <Cart /> },
        { path: "catogery", element: <Category /> },
        { path: "ProductDatels/:id", element: <ProductDetails /> },
      ],
    },
  ]);

  return (
    <CartContextProvider>
      <RouterProvider router={router} />
      <Toaster />
    </CartContextProvider>
  );
}
