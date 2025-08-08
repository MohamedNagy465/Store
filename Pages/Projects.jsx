import React from 'react';
import fressh from "../assets/Screenshot 2025-08-07 181331.png";
import yummy from "../assets/Screenshot 2025-08-07 181952.png";
import daniels from "../assets/Screenshot 2025-08-07 185701.png";

// أيقونات
import {
  FaReact,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiReactquery ,
  SiAxios,
  SiTailwindcss,
} from "react-icons/si";

const techIcons = {
  React: <FaReact className="inline-block mr-1" />,
  "React Query": <SiReactquery  className="inline-block mr-1" />,
  TailwindCSS: <SiTailwindcss className="inline-block mr-1" />,
  Bootstrap: <FaBootstrap className="inline-block mr-1" />,
  Axios: <SiAxios className="inline-block mr-1" />,
  HTML: <FaHtml5 className="inline-block mr-1" />,
  CSS: <FaCss3Alt className="inline-block mr-1" />,
  JavaScript: <FaJs className="inline-block mr-1" />,
  GitHub: <FaGithub className="inline-block mr-1" />,
};

export default function Projects() {
  return (
    <section
      id="portfolio"
      className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900 text-center"
    >
      <div className="container mx-auto"
       data-aos="fade-up"
          data-aos-delay="100"
      >
        <h2
          className="relative text-3xl font-bold text-gray-800 dark:text-white mb-6
          after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2
          after:w-24 after:h-1 after:bg-purple-600"
          data-aos="fade-up"
        >
          My Projects
        </h2>

        <p
          className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Here are some of my recent projects that showcase my skills and passion for development.
        </p>

        <div
          className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        
        >
          {/* === Project 1 === */}
          <div 
           className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
            hover:scale-[1.03]
             hover:shadow-lg hover:shadow-purple-600 
                transition-all duration-300
           ">
            <img
              src={fressh}
              alt="Fresh Cart"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Fresh Cart
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                E-commerce app for fresh products with cart & user authentication.
              </p>
              {/* التقنيات */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Redux Toolkit", "TailwindCSS", "Axios"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-white text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1"
                  >
                    {techIcons[tech]} {tech}
                  </span>
                ))}
              </div>
              {/* الروابط */}
              <div className="flex gap-3">
                <a
                  href="https://fresh-cart-flax-pi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Darthdevv/Fresh-Cart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700 transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* === Project 2 === */}
          <div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
            hover:shadow-lg hover:shadow-purple-600 
                transition-all duration-300 hover:scale-[1.03]">
            <img
              src={yummy}
              alt="Yummy Meals"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Yummy Meals
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                A responsive food recipe app using TheMealDB API with dynamic search and categories.
              </p>
              {/* التقنيات */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Bootstrap"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-white text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1"
                  >
                    {techIcons[tech]} {tech}
                  </span>
                ))}
              </div>
              {/* الروابط */}
              <div className="flex gap-3">
                <a
                  href="https://yummy-bay.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition"
                >
                  Live Demo 
                </a>
                <a
                  href="https://github.com/MohamedNagy465/yummy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700 transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div 
      
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
            hover:shadow-lg hover:shadow-purple-600 
                transition-all duration-300 hover:scale-[1.03]">
            <img
              src={daniels}
              alt="Yummy Meals"
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Yummy Meals
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                A responsive food recipe app using TheMealDB API with dynamic search and categories.
              </p>
              {/* التقنيات */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Bootstrap"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-white text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1"
                  >
                    {techIcons[tech]} {tech}
                  </span>
                ))}
              </div>
              {/* الروابط */}
              <div className="flex gap-3">
                <a
                  href="https://vercel.com/mahmoud-nagis-projects/daniels/9YREFPYgBSUtjCezfZwr1eCE2jTM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition"
                >
                  Live Demo 
                </a>
                <a
                  href="https://github.com/MohamedNagy465/Daniels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700 transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
