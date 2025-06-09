"use client";

import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Carousel } from "@/components/ui/carousel.jsx";

export function PastProjects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with payment integration and inventory management",
      image: "/ecommerce.webp",
      tags: ["React", "Node.js", "Stripe API"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management system with real-time updates",
      image: "/task-app.webp",
      tags: ["Next.js", "Firebase", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with 3D animations and dark mode",
      image: "/portfolio.webp",
      tags: ["Three.js", "GSAP", "Framer Motion"],
      link: "#",
    },
    {
      title: "Health Tracking Dashboard",
      description: "Data visualization platform for health metrics analytics",
      image: "/health-dashboard.webp",
      tags: ["D3.js", "Express", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-4" id="projects ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Past Projects
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mx-auto mb-12">
          Explore my recent work showcasing various technologies and design
          approaches
        </p>

        <div className="hidden md:block ">
          <Carousel
            slides={projects.map((project) => ({
              title: project.title,
              button: "View Details",
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
                  className="rounded-full px-4 py-2 text-white flex items-center space-x-1 bg-black mt-2 text-sm font-bold dark:bg-zinc-800 w-full justify-center"
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
