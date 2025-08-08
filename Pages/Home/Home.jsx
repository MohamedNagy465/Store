import React from 'react'; 
import ProfileImage from '../../assets/DSC_0283.jpg';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <div 
    id='home'
          className="pt-20  pb-12 min-h-screen flex flex-col items-center 
          justify-center text-center space-y-4 px-4"
>
      {/* الصورة */}
      <img
        src={ProfileImage}
        alt="Mahmoud's profile picture"
        className="w-72 h-72 rounded-full object-cover shadow-2xl border-4 border-purple-500 dark:border-purple-700 ring-2 ring-purple-300 dark:ring-purple-900"
        data-aos="fade-up"
        data-aos-duration="600"
      />

      {/* الاسم */}
      <h2
        className="text-4xl font-extrabold text-purple-500"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="100"
      >
        I'm Mahmoud Nagy
      </h2>

      {/* التايب رايتر */}
      <div
        className="text-purple-600 text-xl mt-2 block font-semibold"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <Typewriter
          words={['Front-End Developer', 'React.js', 'Next.js']}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </div>

      {/* وصف عام */}
      <span
        className="text-gray-700 dark:text-gray-300 text-lg"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="300"
      >
        Passionate Front-End Developer from Egypt
      </span>

      <p
        className="text-gray-600 dark:text-gray-300 text-base"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="400"
      >
        🎯 Focused on UI/UX, Performance, and Responsive Design
      </p>

      <p
        className="text-gray-600 dark:text-gray-300 text-base"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="500"
      >
        💡 Building clean and dynamic user experiences
      </p>

      {/* زر التحميل */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
  {/* زر تحميل السيرة الذاتية */}
  <a
    href="/MahmoudNagy-CV.pdf"
    download
    className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-indigo-700 transition"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-delay="600"
  >
    Download CV
  </a>

  {/* زر تواصل معي */}
  <a
    href="#contact"
    className="bg-emerald-600 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-emerald-700 transition"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-delay="700"
  >
    Connect me
  </a>
</div>

    </div>

  );
}
