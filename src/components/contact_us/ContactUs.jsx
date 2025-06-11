"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";

export const ContactUs = () => {
  return (
    <div id="contact" className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's Build Your Vision
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Have a project in mind? Reach out and let's create something amazing
            together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <BackgroundGradient className="rounded-2xl p-8 bg-gray-950">
            <form
              className="space-y-10"
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const email = e.target.email.value;
                const subject = e.target.subject.value;
                const message = e.target.message.value;

                const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
                window.open(
                  `https://wa.me/919321607843?text=${whatsappMessage}`,
                  "_blank"
                );
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message on WhatsApp
              </motion.button>
            </form>
          </BackgroundGradient>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <ContactCard
                title="Email"
                info="anvianco@gmail.com"
                description="Drop us a line anytime"
                icon={<MailIcon />}
              />

              <ContactCard
                title="Phone"
                info="+919321607843"
                description="Mon-Fri, 9am-5pm IST"
                icon={<PhoneIcon />}
              />
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-4">
                Follow Our Work
              </h3>
              <div className="flex space-x-4">
                {["twitter", "dribbble", "github", "linkedin"].map(
                  (platform) => (
                    <motion.a
                      key={platform}
                      href="#"
                      className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white transition-colors"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="w-5 h-5 bg-gray-400 rounded-full" />
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable contact card component
const ContactCard = ({ title, info, description, icon }) => (
  <motion.div
    className="flex items-start space-x-4 p-4 hover:bg-[hsl(255,31%,5%)] rounded-xl transition-colors"
    whileHover={{ y: -5 }}
  >
    <div className="mt-1 bg-gray-800 p-3 rounded-lg">{icon}</div>
    <div>
      <h4 className="text-lg font-medium text-gray-300">{title}</h4>
      <p className="text-white text-xl font-semibold mt-1">{info}</p>
      <p className="text-gray-400 mt-1">{description}</p>
    </div>
  </motion.div>
);

// Icons
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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
    width="20"
    height="20"
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
