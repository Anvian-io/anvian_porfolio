"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#feedback", label: "Feedback" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-b from-black/90 to-black backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold relative group">
            <span className="text-white z-10 relative">Anvian</span>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-10 group-hover:opacity-30 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              whileHover={{ opacity: 0.3 }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-300 hover:text-[#6e5fa5] transition-colors px-2 py-1 group"
              >
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            ))}
            <Link
              href="#contact"
              className="relative px-6 py-2 rounded-full group overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full group-hover:bg-gradient-to-l transition-all duration-500"
                initial={{ backgroundPosition: "0% 50%" }}
                whileHover={{ backgroundPosition: "100% 50%" }}
              />
              <span className="relative z-10 text-white font-medium">
                Contact
              </span>
              <motion.div
                className="absolute -inset-1 bg-white/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="text-white" size={24} />
            ) : (
              <Menu className="text-white" size={24} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-3 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black backdrop-blur-xl shadow-2xl border border-gray-800"
            >
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-6 py-3 text-gray-300 hover:text-white transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                    />
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mx-4 mt-2 relative px-6 py-3 rounded-lg group overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#656c9e] to-purple-700 rounded-lg group-hover:bg-gradient-to-l transition-all duration-500"
                    initial={{ backgroundPosition: "0% 50%" }}
                    // whileHover={{ backgroundPosition: "100% 50%" }}
                  />
                  <span className="relative z-10 text-white font-medium text-center">
                    Contact
                  </span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
