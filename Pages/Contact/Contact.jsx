import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_k172p5i',   
      'template_xb5pc8d',      
      formData,
      'jIKrAqJVAWaXoZotY'    
    )
    .then(() => {
      toast.success(`Thank you, ${formData.name}! Your message has been sent.`);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      toast.error('Oops! Something went wrong. Please try again.');
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-gray-950 px-6 py-20"
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container max-w-6xl mx-auto text-center mb-12"
            data-aos="fade-up"
          data-aos-delay="200">
        <h2 className="relative text-3xl font-bold text-gray-800 dark:text-white mb-6 
          after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 
          after:w-24 after:h-1 after:bg-purple-600">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          I'd love to hear from you! Whether it's a project, job opportunity, or just a chat.
        </p>
      </div>

      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
            data-aos="fade-up"
          data-aos-delay="200">
        {/* الفورم */}
        <form
          onSubmit={handleSubmit}
          className="
           text-center border border-gray-200 dark:border-gray-700
               hover:shadow-lg
              hover:scale-105
               hover:shadow-purple-600
               transition-all duration-300 
          bg-white dark:bg-gray-800 p-8 rounded-lg  space-y-6 flex flex-col justify-center"
        >
          <h3 className="relative text-2xl font-semibold text-gray-800 dark:text-white text-left 
            after:content-[''] after:absolute after:bottom-[-10px] after:left-0 
            after:w-20 after:h-1 after:bg-purple-600">
            Send a Message
          </h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Write your message here..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* معلومات التواصل */}
        <div className="     bg-white dark:bg-gray-800 
        text-gray-700 dark:text-gray-300 
        border border-gray-200 dark:border-gray-700 
        p-8 rounded-lg shadow-md text-center 
        space-y-6 flex flex-col justify-center
        transition-all duration-300 
        hover:scale-105 hover:shadow-lg hover:shadow-purple-600
      ">
       
          <h3 className="text-2xl font-semibold text-purple-600 mb-4">Contact Info</h3>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-purple-600 text-3xl mt-1" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-800 dark:text-white">Email</span>
              <a
                href="mailto:0xmahmoudnagy@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                0xmahmoudnagy@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-purple-600 text-3xl" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-800 dark:text-white">Phone</span>
              <a href="tel:+201227576328" className="hover:underline">+20 122 757 6328</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-600 text-3xl" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-800 dark:text-white">Location</span>
              <span className="hover:underline cursor-default">Cairo / Egypt</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-600">
              <FaLinkedin className="text-purple-600 text-3xl" />
            </a>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800 dark:text-white">LinkedIn</span>
              <a href="https://www.linkedin.com/in/mahmoud-saleh-74bb43220/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Mahmoud Saleh
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/MohamedNagy465" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-600">
              <FaGithub className="text-purple-600 text-3xl" />
            </a>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800 dark:text-white">GitHub</span>
              <a href="https://github.com/MohamedNagy465" target="_blank" rel="noopener noreferrer" className="hover:underline">
                @MohamedNagy465
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
