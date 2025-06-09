"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

// Service data
const services = [
  {
    title: "Web Development",
    description:
      "Custom websites built with modern frameworks for optimal performance and scalability.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered interfaces designed for seamless experiences and maximum engagement.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
  },
  {
    title: "E-commerce Solutions",
    description:
      "Secure online stores with payment integration and inventory management.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    ),
  },
  {
    title: "SEO Optimization",
    description:
      "Increase visibility and rankings with our data-driven SEO strategies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        />
      </svg>
    ),
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and 24/7 technical support.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
  },
];

export function ServiceSection() {
  return (
    <div className="py-20 w-full bg-black px-4">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h1>
        <div className="h-1 w-20 bg-gray-400 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = React.useState(false);

  // Different effects for variety
  const effects = [
    <CanvasRevealEffect animationSpeed={5} containerClassName="bg-gray-900" />,
    <>
      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-gray-800"
        colors={[
          [200, 200, 200],
          [150, 150, 150],
        ]}
        dotSize={2}
      />
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50" />
    </>,
    <CanvasRevealEffect
      animationSpeed={4}
      containerClassName="bg-gray-700"
      colors={[[180, 180, 180]]}
    />,
  ];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-gray-800 group/canvas-card flex items-center justify-center w-full h-[350px] rounded-3xl overflow-hidden relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {effects[index % effects.length]}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center p-6">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-800 p-4 rounded-full border border-gray-700">
            {service.icon}
          </div>
        </div>

        <motion.h3
          initial={{ opacity: 1 }}
          animate={{
            opacity: hovered ? 0 : 1,
            y: hovered ? 20 : 0,
          }}
          className="text-xl font-bold text-white mb-2"
        >
          {service.title}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: hovered ? 1 : 0,
            height: hovered ? "auto" : 0,
          }}
          className="overflow-hidden"
        >
          <p className="text-gray-300">{service.description}</p>
          <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gray-600"></div>
      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gray-600"></div>
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gray-600"></div>
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gray-600"></div>
    </div>
  );
};
