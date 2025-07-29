import React from "react";

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-300 bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm select-none">
          &copy; {new Date().getFullYear()} FreshCart. All rights reserved.
        </p>

        <div className="text-sm select-none">
          Follow us:
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="ml-2 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            Twitter
          </a>{" "}
          |
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="mx-2 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            Facebook
          </a>{" "}
          |
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
