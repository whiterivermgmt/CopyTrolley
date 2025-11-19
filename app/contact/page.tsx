"use client";

import React from "react";
import { SiFacebook, SiInstagram, SiGoogle } from "react-icons/si";
import { motion } from "framer-motion";

const ContactPage = () => {
  // Copy Trolley Bedford coordinates
  const bedfordLat = 38.8611;
  const bedfordLng = -86.4872;

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-16">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch!</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Providing services to Bedford and surrounding areas.
        </p>
      </motion.div>

      {/* Form + Map */}
      <div className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Form */}
        <motion.form
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-600 mb-4">
            Contact Copy Trolley for printing services or inquiries. We'll respond as soon as possible.
          </p>

          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-400 transition"
          />
          <input
            type="text"
            placeholder="Subject"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-400 transition"
          />
          <textarea
            placeholder="Your Message..."
            rows={5}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-400 transition resize-none"
          />

          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com/p/Copy-Trolley-100063464026096/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-orange-400 text-2xl"
            >
              <SiFacebook />
            </a>
            <a
              href="https://www.google.com/search?q=copy+trolley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-orange-400 text-2xl"
            >
              <SiGoogle />
            </a>
            
          </div>

          <button
  type="submit"
  className="mt-4 px-6 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 hover:scale-105 transition transform shadow-md"
>
  Send Message
</button>

        </motion.form>

        {/* Map */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src={`https://www.google.com/maps?q=${bedfordLat},${bedfordLng}&hl=en&z=12&output=embed`}
            width="100%"
            height="100%"
            className="min-h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>

      {/* Contact Methods */}
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12 px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
       <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
  <i className="fa-solid fa-location-dot text-3xl text-blue-700 mb-2"></i>
  <h3 className="text-xl font-semibold mb-1">Locations</h3>
  <div className="text-gray-600 text-center space-y-1">
    <p>2319 Mitchell Rd - Bedford, IN 47421</p>
    <p>107 N Gospel St - Paoli, IN 47454</p>
  </div>
</div>

        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <i className="fa-solid fa-envelope text-3xl text-green-600 mb-2"></i>
          <h3 className="text-xl font-semibold mb-1">Email</h3>
          <a href="mailto:copytrolley@gmail.com" className="text-gray-600 hover:text-orange-500">
            copytrolley@gmail.com
          </a>
        </div>

         <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
    <i className="fa-solid fa-phone text-3xl text-red-600 mb-2"></i>
    <h3 className="text-xl font-semibold mb-2">Phone</h3>
    <div className="text-gray-600 text-center space-y-1">
      <p>
        <a href="tel:+18127887749" className="hover:text-red-600">
          812‑788‑7749
        </a>
      </p>
    </div>
    </div>
      </motion.div>
    </main>
  );
};

export default ContactPage;
