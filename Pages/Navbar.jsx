import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
export default function navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];
  const menuRef = useRef(null);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = window.document.documentElement;
    root.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);
  const handleClickOutside = useCallback(
    (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    },
    [menuRef]
  );
  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen, handleClickOutside]);
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
   <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md px-6 py-3 transition-all z-50">
  <div className="container mx-auto flex items-center justify-between">
    <h1 className="text-xl font-bold text-gray-900 dark:text-white">Mahmoud</h1>
    {/* روابط سطح المكتب */}
    <ul className="hidden md:flex items-center gap-6 text-gray-800 dark:text-gray-200">
      {navLinks.map(({ name, href }) => (
        <li key={name}>
          <a
            href={href}
            onClick={(e) => handleLinkClick(e, href)}
            className="cursor-pointer hover:text-blue-500 transition"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
    {/* يمين: Connect + Toggle Dark + زر الموبايل */}
    <div className="flex items-center gap-4">
      <button
        onClick={() => setDark(!dark)}
        className="p-1 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle dark mode"
        type="button"
      >
        {dark ? (
          <Sun size={18} className="text-yellow-400" />
        ) : (
          <Moon size={18} className="text-black-300" />
        )}
      </button>
      <button
        className="md:hidden text-gray-900 dark:text-white"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        type="button"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>
  {menuOpen && (
    <div
      id="mobile-menu"
      ref={menuRef}
      className="md:hidden mt-4 space-y-4 text-gray-800 dark:text-gray-200 overflow-hidden bg-white dark:bg-gray-900 rounded-md shadow-lg px-4 py-4"
      role="menu"
    >
      <ul className="flex flex-col gap-2" role="none">
        {navLinks.map(({ name, href }) => (
          <li key={name} role="none">
            <a
              href={href}
              onClick={(e) => handleLinkClick(e, href)}
              className="block px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
              role="menuitem"
              tabIndex={0}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )}
</nav>
  );
}
