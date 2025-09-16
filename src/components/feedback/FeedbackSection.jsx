"use client";
import React from 'react';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";
export const FeedbackSection = () => {
  const testimonials = [
    {
      quote:
        "Working with this company has been an incredible experience. The team's professionalism, collaborative spirit, and commitment to quality are truly commendable. As a developer, I’ve grown tremendously thanks to the innovative projects and supportive environment.",
      name: "Suthakar Anburaj",
      designation: "Developer",
      src: "/suthakar.jpg",
    },
    {
      quote:
        "Joining this company has been a transformative experience. The exposure to real-world challenges, the freedom to innovate, and the constant encouragement from peers have helped me sharpen my skills and grow both personally and professionally.",
      name: "Tushar Hasule",
      designation: "Developer",
      src: "/tushar.jpg",
    },
    {
      quote:
        "Being part of this company has been a fantastic journey. The level of professionalism, teamwork, and dedication to excellence is genuinely inspiring. As a developer, I've learned so much through challenging projects and an encouraging work culture.",
      name: "Tanmay Dhole",
      designation: "Developer",
      src: "/tanmay.png",
    },
     {
      quote:
        "My journey here has been truly transformative. Collaborating with talented peers and working on challenging projects has not only strengthened my technical skills but also boosted my confidence as a developer. The constant support, teamwork, and shared learning with my college mates have shaped me into a better problem-solver and team player",
      name: "Ganesh Gowda",
      designation: "Developer",
      src: "/ganesh.jpeg",
    },
    {
      quote:
        "Working here has been a truly rewarding experience. The environment encourages innovation, collaboration, and continuous learning. I have had the privilege of working alongside talented peers who constantly push me to do better. As a developer, I have sharpened my skills, expanded my knowledge, and gained the confidence to take on challenging projects with a strong sense of purpose",
      name: "Prajwal Shevante",
      designation: "Developer",
      src: "/prajwal.jpeg",
    },
    {
      quote:
        "Working with Anvian was a game changing experience in my career , here i learned from my fellow colleges and gained an amazing experience by working with various complex projects, making me a more skilled and knowledgeable person in developing complex web apps.",
      name: "Harshal Chaudhari",
      designation: "Developer",
      src: "/harshal.jpg",
    },



















    // {
    //   quote:
    //     "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    //   name: "Michael Rodriguez",
    //   designation: "CTO at InnovateSphere",
    //   src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    //   name: "Emily Watson",
    //   designation: "Operations Director at CloudScale",
    //   src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //   name: "James Kim",
    //   designation: "Engineering Lead at DataPro",
    //   src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Client Feedback
            </motion.h2>
            <motion.p
              className="mt-4 text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Hear what industry leaders say about our services
            </motion.p>
          </div>
        </div>
        <div className="mt-12">
          <AnimatedTestimonials
            testimonials={testimonials}
            className="bg-gray-900 text-white border-gray-800"
          />
        </div>
      </div>
    </section>
  );
};