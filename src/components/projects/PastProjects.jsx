"use client";

import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Carousel } from "@/components/ui/carousel.jsx";
import { motion } from "framer-motion";
export function PastProjects() {
  const projects = [
    {
      title: "Clothing Website",
      description: "Full-featured online clothing store",
      image: "/ClothingWebsite.png",
      tags: ["Next.js", "Node.js", "MongoDB", "Redis"],
      link: "https://pradha-frontend-main.vercel.app/",
    },
    {
      title: "Clothing Website Dashboard",
      description: "Product Management Dashboard Website",
      image: "/ClothingDashboard.png",
      tags: ["Next.js", "Node.js", "MongoDB"],
      link: "https://pradha-dashboard-main.vercel.app/",
    },
    // {
    //   title: "Portfolio Website",
    //   description: "Modern portfolio with 3D animations and dark mode",
    //   image: "/portfolio.webp",
    //   tags: ["Three.js", "GSAP", "Framer Motion"],
    //   link: "#",
    // },
    // {
    //   title: "Health Tracking Dashboard",
    //   description: "Data visualization platform for health metrics analytics",
    //   image: "/health-dashboard.webp",
    //   tags: ["D3.js", "Express", "MongoDB"],
    //   link: "#",
    // },
  ];

  return (
    <section className="py-20 px-4" id="projects ">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Past Projects
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-400 max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Explore my recent work showcasing various technologies and design
          approaches
        </motion.p>

        <div className="hidden md:block ">
          <Carousel
            slides={projects.map((project) => ({
              title: project.title,
              button: "View Details",
              link: project.link,
              src: project.image,
              content: (
                <div className="pt-4">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-neutral-100 dark:bg-zinc-800 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ),
            }))}
          />
        </div>

        {/* Mobile view - Stacked cards instead of carousel */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {projects.map((project, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full"
            >
              <img
                src={project.image}
                alt={project.title}
                height="300"
                width="400"
                className="object-cover w-full rounded-t-[22px]"
              />
              <div className="pt-4">
                <h3 className="text-xl font-bold text-black dark:text-neutral-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-neutral-100 dark:bg-zinc-800 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="rounded-full px-4 py-2 text-white flex items-center space-x-1 bg-black mt-2 text-sm font-bold dark:bg-zinc-800 w-full justify-center cursor-pointer"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <span>View Project</span>
                </button>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}

// export default PastProjects;
