"use client";
import React, { useState, useEffect } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { ColourfulText } from "@/components/ui/colourful-text";
import { Cover } from "../ui/cover";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { icon: "📐", title: "Design", desc: "Wireframes, UI/UX, branding" },
  { icon: "🛠️", title: "Develop", desc: "Modern websites & web apps" },
  { icon: "🚀", title: "Deploy", desc: "CI/CD & cloud setup" },
  { icon: "🖥️", title: "Host", desc: "Fast, secure, scalable servers" },
  { icon: "🔁", title: "Maintain", desc: "Ongoing updates & support" },
];

// Services to rotate through
const services = [
  "Web Development",
  "SEO Optimization",
  "Maintenance & Support",
  "UI/UX Design",
  "E-commerce Solutions",
];

export function Hero_section() {
  const [activeServer, setActiveServer] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // Rotate services every 2 seconds
  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(serviceInterval);
  }, []);

  useEffect(() => {
    const logs = [
      "> npm run build",
      "✓ Compiled successfully",
      "> Deploying to production...",
      "✓ Deployment complete",
      "> Running tests...",
      "✓ All tests passed",
      "> Monitoring traffic...",
      "✓ 99.9% uptime maintained",
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < logs.length) {
        setTerminalLogs((prev) => [...prev.slice(-3), logs[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveServer((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <BackgroundLines className="flex items-center justify-center w-full px-4 min-h-screen">
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-8 max-w-7xl py-12">
        {/* Left Side - Updated with rotating services */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center order-1 md:order-1 mt-8 md:mt-0">
          <motion.p
            className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 dark:from-neutral-400 dark:to-white text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-sans py-2 relative z-20 font-bold tracking-tight text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Anvian
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="max-w-xl text-center text-base md:text-lg text-neutral-700 dark:text-neutral-400 px-4"
          >
            Design Your Vision. <Cover>Develop Your Future</Cover>
          </motion.h2>

          {/* Rotating Services Section */}
          <motion.div
            className="mt-16 md:mt-8 w-full max-w-md flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-2xl md:text-4xl bg-gradient-to-r from-[#171717] to-[#353535] rounded-lg group-hover:bg-gradient-to-l transition-all duration-500 mb-4 p-2 text-white">
              Website Building Agency
            </div>
            <div className="text-xs md:text-sm text-green-400  mb-2">
              Our Services
            </div>

            <div className="relative h-12 sm:h-16 w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                    {/* <ColourfulText> */}
                    {services[currentServiceIndex]}
                    {/* </ColourfulText> */}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex mt-3 space-x-1.5">
              {services.map((_, idx) => (
                <motion.div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    currentServiceIndex === idx
                      ? "bg-blue-500"
                      : "bg-neutral-300 dark:bg-neutral-700"
                  }`}
                  animate={{
                    scale: currentServiceIndex === idx ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side - Enhanced Server Visualization */}
        <div
          className="w-full md:w-1/2 h-[500px] sm:h-[500px] md:h-[600px] flex items-center justify-center relative order-2 md:order-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Server Rack Visualization */}
          <motion.div
            className="mt-8 relative h-[320px] w-[220px] sm:h-[300px] sm:w-[200px] md:h-[350px] md:w-[240px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Server Rack Frame */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-lg border border-gray-700 shadow-2xl">
              <div className="absolute top-2 left-2 right-2 h-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-full"></div>

              {/* Server Blades with Tooltips */}
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className={`absolute left-2 right-2 h-[22px] sm:h-[25px] rounded-sm flex items-center px-2 cursor-pointer
                    ${
                      activeServer === i
                        ? "bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/50"
                        : "bg-gray-900 border border-gray-700"
                    }`}
                  style={{ top: 35 + i * 28 }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    boxShadow:
                      activeServer === i
                        ? [
                            "0 0 0px rgba(100, 100, 255, 0.1)",
                            "0 0 12px rgba(100, 100, 255, 0.6)",
                            "0 0 0px rgba(100, 100, 255, 0.1)",
                          ]
                        : [
                            "0 0 0px rgba(100, 100, 100, 0.1)",
                            "0 0 8px rgba(150, 150, 150, 0.3)",
                            "0 0 0px rgba(100, 100, 100, 0.1)",
                          ],
                  }}
                  onMouseEnter={() => setActiveServer(i)}
                >
                  {/* Server Label */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xs">{step.icon}</span>
                    <span className="text-[0.45rem] sm:text-[0.5rem] text-gray-300 font-mono truncate">
                      {step.title.toUpperCase()}
                    </span>
                  </div>

                  {/* LED Indicators */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-1">
                    <motion.div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                    <motion.div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  </div>

                  {/* Tooltip on hover */}
                  {activeServer === i && (
                    <motion.div
                      className="absolute -top-8 left-0 w-[150px] sm:w-[170px] bg-gray-900/90 backdrop-blur-sm text-white text-[0.6rem] sm:text-xs p-2 rounded-md border border-gray-700 shadow-lg z-30"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center mb-1">
                        <span className="mr-2">{step.icon}</span>
                        <strong className="text-blue-300">{step.title}</strong>
                      </div>
                      <div>{step.desc}</div>
                    </motion.div>
                  )}
                </motion.div>
              ))}

              {/* Network Activity Lines */}
              <div className="absolute -bottom-8 -right-6 w-[140px] sm:w-[160px] h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
              <div className="absolute -top-8 -left-6 w-[140px] sm:w-[160px] h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />

              {/* Connection Dots */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500"
                  style={{
                    left: i % 2 === 0 ? -6 : "auto",
                    right: i % 2 !== 0 ? -6 : "auto",
                    top: 70 + i * 45,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            {/* Floating Website Preview */}
            <motion.div
              className="absolute -top-6 -right-8 w-[120px] h-[90px] sm:w-[120px] sm:h-[80px] md:-top-8 md:-right-10 md:w-[130px] md:h-[90px] bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-md shadow-xl overflow-hidden z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -5, 0],
              }}
              transition={{
                delay: 1.2,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Browser UI */}
              <div className="h-3 sm:h-3 bg-gray-800 border-b border-gray-700 flex px-1 sm:px-2 items-center">
                <div className="w-1.5 h-2.5 rounded-full bg-gray-600 mr-1"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-1"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                <div className="text-[0.35rem] sm:text-[0.4rem] text-gray-500 ml-1">
                  anvian.co
                </div>
              </div>

              {/* Website Content */}
              <div className="p-1 sm:p-1.5">
                <div className="h-1.5 bg-gray-800 rounded mb-1 w-3/4"></div>
                <div className="h-1.5 bg-gray-800 rounded mb-1 w-full"></div>
                <div className="h-1.5 bg-gray-800 rounded mb-1 w-5/6"></div>
                <div className="flex space-x-1 mt-1 sm:mt-1.5">
                  <div className="h-3 sm:h-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded w-1/3 border border-gray-700"></div>
                  <div className="h-3 sm:h-4 bg-gray-800 rounded w-1/3 border border-gray-700"></div>
                </div>
              </div>
            </motion.div>

            {/* Terminal Window */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-[140px] h-[70px] sm:w-[150px] sm:h-[80px] md:-bottom-8 md:-left-10 md:w-[160px] md:h-[90px] bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-md shadow-xl overflow-hidden z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              {/* Terminal Header */}
              <div className="h-3 sm:h-4 bg-gray-800 border-b border-gray-700 flex items-center px-1.5">
                <div className="text-[0.45rem] sm:text-[0.5rem] text-gray-400 font-mono">
                  terminal
                </div>
                <div className="ml-auto flex space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-1 font-mono text-[0.35rem] sm:text-[0.4rem] text-green-400 bg-black/20 h-full overflow-hidden">
                <div className="h-full flex flex-col justify-end">
                  {terminalLogs.map((log, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mb-0.5"
                    >
                      $ {log}
                    </motion.div>
                  ))}
                  <motion.div
                    className="inline-flex items-center"
                    animate={{ opacity: [1, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    ▋
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Data Flow Visualization - Hidden on mobile */}
            <motion.div
              className="absolute -top-14 sm:-top-16 left-1/2 w-28 h-28 sm:w-36 sm:h-36 z-0 hidden sm:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500"
                  style={{
                    left: `${Math.cos((i * Math.PI) / 4) * 25 + 25}px`,
                    top: `${Math.sin((i * Math.PI) / 4) * 25 + 25}px`,
                  }}
                  animate={{
                    x: [0, Math.cos((i * Math.PI) / 4) * 12],
                    y: [0, Math.sin((i * Math.PI) / 4) * 12],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Floating Tagline */}
          <motion.div
            className="mt-8 absolute bottom-0 w-full text-center text-neutral-400 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Premium Hosting ∙ Instant Deployment
          </motion.div>

          {/* Stats Panel - Hidden on mobile */}
          <motion.div
            className="absolute top-14 sm:top-16 -right-6 sm:-right-8 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-1.5 sm:p-2 text-[0.6rem] sm:text-xs w-28 sm:w-36 shadow-lg hidden xl:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-gray-400">CPU</span>
              <span className="text-green-400">42%</span>
            </div>
            <div className="h-1 bg-gray-700 rounded-full mb-2">
              <div
                className="h-1 bg-green-500 rounded-full"
                style={{ width: "42%" }}
              ></div>
            </div>

            <div className="flex justify-between mb-1">
              <span className="text-gray-400">Memory</span>
              <span className="text-amber-400">68%</span>
            </div>
            <div className="h-1 bg-gray-700 rounded-full mb-2">
              <div
                className="h-1 bg-amber-500 rounded-full"
                style={{ width: "68%" }}
              ></div>
            </div>

            <div className="flex justify-between mb-1">
              <span className="text-gray-400">Network</span>
              <span className="text-blue-400">1.2Gbps</span>
            </div>
            <div className="h-1 bg-gray-700 rounded-full">
              <div
                className="h-1 bg-blue-500 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </BackgroundLines>
  );
}
