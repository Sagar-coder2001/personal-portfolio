import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";

// 👇 Animated SkillCircle Component
const SkillCircle = ({ name, level }) => {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const [dashOffset, setDashOffset] = useState(circumference);
  const controls = useAnimation();

  useEffect(() => {
    // Animate stroke fill
    setTimeout(() => {
      setDashOffset(circumference - (level / 100) * circumference);
    }, 100); // short delay for visual entrance
  }, [level, circumference]);

  useEffect(() => {
    // Animate fade-in and slide-up
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
        {/* Background circle */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Foreground animated progress */}
        <motion.circle
          stroke="#14b8a6"
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
      </svg>
      <p className="text-xl font-semibold mt-4">{name}</p>
      <p className="text-sm text-gray-500">{level}%</p>
    </motion.div>
  );
};

// 👇 Main Skill Component
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
  ];

  return (
    <div
      className="py-12 px-6 transition-all duration-500"
      style={{ backgroundColor: bgcolor, color: txtcolor }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, idx) => (
          <SkillCircle key={idx} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
