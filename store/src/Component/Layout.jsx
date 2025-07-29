import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Navbar';

export default function Layout() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar />

      <main className="container mx-auto pt-24 pb-12 px-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
