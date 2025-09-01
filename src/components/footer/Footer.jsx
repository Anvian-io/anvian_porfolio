"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";
import { ColourfulText } from "../ui/colourful-text";


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-black border-t border-gray-900">
      {/* <BackgroundGradient className="rounded-none"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Agency Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                {/* <div className="bg-white w-8 h-8 rounded-full" /> */}
                <img src="/avain2.png" alt="Anvain Logo" className=" w-8 h-8 rounded-full" />

                <span className="text-2xl font-bold text-white">Anvian</span>
              </div>
            </motion.div>

            <p className="text-gray-400">
              Building digital experiences that transform brands and drive
              results.
            </p>

            <div className="flex space-x-4">
              {["twitter", "dribbble", "github", "linkedin"].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="bg-gray-900 p-3 rounded-full text-gray-300 hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{platform}</span>
                  <div className="w-5 h-5 bg-gray-400 rounded-full" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "UI/UX Design",
                "E-commerce Solutions",
                "SEO Optimization",
                "App Development",
                "Brand Strategy",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 glow">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="mt-1 bg-gray-900 p-2 rounded-lg">
                  <MailIcon />
                </div>
                <span className="text-gray-400">anvianco@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 bg-gray-900 p-2 rounded-lg">
                  <PhoneIcon />
                </div>
                <span className="text-gray-400">+919321607843</span>
              </li>
              {/* <li className="flex items-start space-x-3">
                <div className="mt-1 bg-gray-900 p-2 rounded-lg">

                  <LocationIcon />
                </div>
                <span className="text-gray-400">
                  123 Digital Avenue, NY 10001
                </span>
              </li> */}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Join our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-500">
            © {currentYear} Anvian Agency. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* </BackgroundGradient> */}
    </div>
  );
};

// Reuse the same icon components from ContactUs
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
