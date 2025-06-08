"use client";
import React from "react";

export function ColourfulText({ text }) {
  const colors = [
    "rgb(255, 255, 255)", // Pure white
    "rgb(240, 240, 240)", // Off-white
    "rgb(220, 220, 220)", // Light gray
    "rgb(200, 200, 200)", // Silver
    "rgb(180, 180, 180)", // Medium gray
    "rgb(150, 150, 150)", // Gray
    "rgb(120, 120, 120)", // Dark gray
    "rgb(90, 90, 90)",    // Charcoal
    "rgb(60, 60, 60)",    // Dark charcoal
    "rgb(30, 30, 30)",    // Near black
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${count}-${index}`}
          style={{
            color: currentColors[index % currentColors.length],
            transition: "color 2s ease",
            transitionDelay: `${index * 0.99}s`
          }}
          className="inline-block whitespace-pre font-sans tracking-tight"
        >
          {char}
        </span>
      ))}
    </>
  );
}