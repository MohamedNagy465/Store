  import React, { useEffect } from 'react';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaCode,
    FaGithub,
    FaGitAlt,
  } from 'react-icons/fa';
  import {
    SiTailwindcss,
    SiRedux,
    SiNextdotjs,
    SiBootstrap,
  } from 'react-icons/si';
  import { MdDevices } from 'react-icons/md'; 
  export default function Skills() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
    const skills = [
      { name: 'HTML', level: 90, icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
      { name: 'CSS', level: 85, icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
      { name: 'JavaScript', level: 80, icon: <FaJs className="text-yellow-400 text-4xl" /> },
      { name: 'React.js', level: 75, icon: <FaReact className="text-cyan-400 text-4xl" /> },
      { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
      { name: 'TypeScript', level: 70, icon: <FaCode className="text-indigo-400 text-4xl" /> },
      { name: 'Redux', level: 70, icon: <SiRedux className="text-purple-600 text-4xl" /> },
      { name: 'Next.js', level: 65, icon: <SiNextdotjs className="text-black dark:text-white text-4xl" /> },
      { name: 'Bootstrap', level: 75, icon: <SiBootstrap className="text-purple-500 text-4xl" /> },
      { name: 'Git', level: 85, icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
      { name: 'GitHub', level: 80, icon: <FaGithub className="text-gray-800 dark:text-white text-4xl" /> },
      { name: 'Responsive Design', level: 90, icon: <MdDevices className="text-green-500 text-4xl" /> },
    ];
    return (
      <section
        id="skills"
        className="py-20 px-6  dark:bg-[#2c2c2c] transition-colors duration-500"
      >
        <div className="max-w-6xl mx-auto">
      <h2
        className="relative text-3xl font-bold text-center mb-5 text-gray-800 dark:text-white 
        after:content-[''] after:block after:w-24 after:h-1 after:mt-4 after:mx-auto after:bg-purple-600"
        data-aos="fade-up"
      >
    My Skills
  </h2>
  <p 
        data-aos="fade-up"
  className='text-center mb-5'>
    Here are the technologies I work with to bring ideas to life
    </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {skills.map((skill, index) => (
            <div
              key={index}
                className="
                bg-white dark:bg-[#1f1f1f] 
                p-6 rounded-xl 
                text-center 
                border border-gray-200 dark:border-gray-700
                hover:shadow-lg hover:shadow-purple-600 hover:scale-105
                transition-all duration-300
              "
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              >
                <div className="flex flex-col items-center space-y-4 ">
                  {skill.icon}
                  <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                    {skill.name}
                  </h3>
                  <div className="w-full">
                    <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
                      <div
                        className="h-2 rounded bg-purple-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 text-center">
                      {skill.level}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }