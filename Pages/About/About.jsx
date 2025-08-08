import React, { useEffect } from 'react';  
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="about"
      className="w-full min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <h2
        className="relative text-3xl font-bold text-center mb-5 text-gray-800 dark:text-white 
          after:content-[''] after:block after:w-24 after:h-1 after:mt-4 after:mx-auto after:bg-purple-600"
        data-aos="fade-up"
      >
        About Me
      </h2>

      {/* المحتوى */}
      <div
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6"
        data-aos="fade-up"
      >
        {/* النص الأساسي */}
        <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-10 border border-gray-300 dark:border-gray-600 hover:shadow-purple-500 hover:scale-105 transition-all duration-300 text-center sm:text-left">
          <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg leading-relaxed tracking-wide">
            I'm <span className="font-semibold text-purple-600">Mahmoud Nagy</span>, a passionate Front-End Developer with a strong background in building responsive and user-friendly web applications using modern technologies like{' '}
            <span className="text-purple-500 font-semibold">React.js</span>,{' '}
            <span className="text-purple-500 font-semibold">Tailwind CSS</span>, and{' '}
            <span className="text-purple-500 font-semibold">JavaScript</span>. <br />
            I focus on writing clean and maintainable code, and I’m always eager to learn and grow.
          </p>
        </div>

        {/* الكارت الإضافي */}
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-300 dark:border-purple-700 hover:shadow-purple-500 transition-all duration-300 rounded-xl p-8 shadow-2xl hover:scale-105 text-center sm:text-left">
          <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
            Aspiring Front-End Developer
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-base sm:text-lg">
            Passionate about creating exceptional user experiences with React, JavaScript, and TypeScript.
            I focus on building clean, responsive, and performant web applications.
          </p>
          <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
            What I Focus On
          </h4>
          <ul className="list-none text-gray-700 dark:text-gray-300 space-y-2">
            <li>Frontend Technologies & Modern Frameworks</li>
            <li>JavaScript, DOM Manipulation & React Architecture</li>
            <li>Git, GitHub & Project Version Control</li>
            <li>UI/UX Design & Responsive Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
