"use client";
import React, { useState, useEffect } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { ColourfulText } from "@/components/ui/colourful-text";
import { Cover } from "../ui/cover";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

// Moved outside component to prevent re-creation on every render
const steps = [
  { icon: "📐", title: "Design", desc: "Wireframes, UI/UX, branding" },
  { icon: "🛠️", title: "Develop", desc: "Modern websites & web apps" },
  { icon: "🚀", title: "Deploy", desc: "CI/CD & cloud setup" },
  { icon: "🖥️", title: "Host", desc: "Fast, secure, scalable servers" },
  { icon: "🔁", title: "Maintain", desc: "Ongoing updates & support" },
];

export function Hero_section() {
  const [activeServer, setActiveServer] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  // Simulate terminal logs
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

  // Cycle through active servers
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveServer((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]); // Removed steps.length dependency since it's constant

  return (
    <BackgroundLines className="flex items-center justify-center w-full px-4 min-h-screen">
      <div className="flex w-full items-center justify-between gap-8 max-w-7xl py-12">
        {/* Left Side - Company Name + Slogan */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <motion.p
            className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 dark:from-neutral-400 dark:to-white text-[6rem] md:text-[8rem] lg:text-[10rem] font-sans py-2 relative z-20 font-bold tracking-tight text-center"
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
            className="max-w-xl text-center text-sm md:text-lg text-neutral-700 dark:text-neutral-400"
          >
            Design Your Vision. <Cover>Develop Your Future</Cover>
          </motion.h2>
        </div>

        {/* Right Side - Enhanced Server Visualization */}
        <div
          className="w-1/2 h-[600px] flex items-center justify-center relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Server Rack Visualization */}
          <motion.div
            className="relative h-[350px] w-[240px]"
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
                  className={`absolute left-2 right-2 h-[30px] rounded-sm flex items-center px-2 cursor-pointer
                    ${
                      activeServer === i
                        ? "bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/50"
                        : "bg-gray-900 border border-gray-700"
                    }`}
                  style={{ top: 50 + i * 36 }}
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
                  // transition={{
                  //   delay: 0.8 + i * 0.15,
                  //   duration: 1.5,
                  //   repeat: Infinity,
                  //   ease: "easeInOut",
                  // }}
                  onMouseEnter={() => setActiveServer(i)}
                >
                  {/* Server Label */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xs">{step.icon}</span>
                    <span className="text-[0.6rem] text-gray-300 font-mono truncate">
                      {step.title.toUpperCase()}
                    </span>
                  </div>

                  {/* LED Indicators */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-1">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-500"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-amber-500"
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
                      className="absolute -top-8 left-0 w-[200px] bg-gray-900/90 backdrop-blur-sm text-white text-xs p-2 rounded-md border border-gray-700 shadow-lg z-30"
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
              <div className="absolute -bottom-8 -right-6 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
              <div className="absolute -top-8 -left-6 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />

              {/* Connection Dots */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-blue-500"
                  style={{
                    left: i % 2 === 0 ? -8 : "auto",
                    right: i % 2 !== 0 ? -8 : "auto",
                    top: 100 + i * 60,
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
              className="absolute -top-8 -right-10 w-[140px] h-[100px] bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-md shadow-xl overflow-hidden z-20"
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
              <div className="h-4 bg-gray-800 border-b border-gray-700 flex px-2 items-center">
                <div className="w-2 h-2 rounded-full bg-gray-600 mr-1"></div>
                <div className="w-2 h-2 rounded-full bg-gray-600 mr-1"></div>
                <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                <div className="text-[0.5rem] text-gray-500 ml-2">
                  anvian.co
                </div>
              </div>

              {/* Website Content */}
              <div className="p-2">
                <div className="h-2 bg-gray-800 rounded mb-1 w-3/4"></div>
                <div className="h-2 bg-gray-800 rounded mb-1 w-full"></div>
                <div className="h-2 bg-gray-800 rounded mb-1 w-5/6"></div>
                <div className="flex space-x-1 mt-2">
                  <div className="h-6 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded w-1/3 border border-gray-700"></div>
                  <div className="h-6 bg-gray-800 rounded w-1/3 border border-gray-700"></div>
                </div>
              </div>
            </motion.div>

            {/* Terminal Window */}
            <motion.div
              className="absolute -bottom-8 -left-10 w-[180px] h-[100px] bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-md shadow-xl overflow-hidden z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              {/* Terminal Header */}
              <div className="h-5 bg-gray-800 border-b border-gray-700 flex items-center px-2">
                <div className="text-[0.6rem] text-gray-400 font-mono">
                  terminal
                </div>
                <div className="ml-auto flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-1 font-mono text-[0.5rem] text-green-400 bg-black/20 h-full overflow-hidden">
                <div className="h-full flex flex-col justify-end">
                  {terminalLogs.map((log, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mb-1"
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

            {/* Data Flow Visualization */}
            <motion.div
              className="absolute -top-20 left-1/2 w-40 h-40 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-blue-500"
                  style={{
                    left: `${Math.cos((i * Math.PI) / 4) * 40 + 40}px`,
                    top: `${Math.sin((i * Math.PI) / 4) * 40 + 40}px`,
                  }}
                  animate={{
                    x: [0, Math.cos((i * Math.PI) / 4) * 20],
                    y: [0, Math.sin((i * Math.PI) / 4) * 20],
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
            className="absolute bottom-0 w-full text-center text-neutral-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Premium Hosting ∙ Instant Deployment
          </motion.div>

          {/* Stats Panel */}
          <motion.div
            className="absolute top-20 -right-8 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-3 text-xs w-40 shadow-lg"
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
