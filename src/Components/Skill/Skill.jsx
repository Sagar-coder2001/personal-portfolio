import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";

// 🎯 SkillCircle Component with animation and hover effects
const SkillCircle = ({ name, level }) => {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const [dashOffset, setDashOffset] = useState(circumference);
  const controls = useAnimation();

  useEffect(() => {
    // Animate stroke fill
    const timer = setTimeout(() => {
      setDashOffset(circumference - (level / 100) * circumference);
    }, 100);

    return () => clearTimeout(timer);
  }, [level, circumference]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 group"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
        {/* Background Circle */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Animated Foreground Circle */}
        <motion.circle
          stroke="url(#gradientStroke)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
      </svg>

      <p className="text-xl font-semibold mt-4 group-hover:text-cyan-500 transition-all duration-300">
        {name}
      </p>
      <p className="text-sm text-gray-500 group-hover:text-cyan-400">
        {level}%
      </p>
    </motion.div>
  );
};

// 🎨 Main Skill Section
const Skill = () => {
  const bgcolor = useSelector((state) => state.theme.value);
  const txtcolor = useSelector((state) => state.theme.textcolor);

  const skills = [
    { name: "React", level: 90 },
    { name: "Tailwind", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "Node.js", level: 50 },
    { name: "MongoDB", level: 70 },
    { name: "React Native", level: 60 },
  ];

  return (
    <div
      className="py-16 px-6 md:px-12 transition-all duration-500"
      style={{ backgroundColor: bgcolor, color: txtcolor }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        🚀 My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {skills.map((skill, idx) => (
          <SkillCircle key={idx} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
