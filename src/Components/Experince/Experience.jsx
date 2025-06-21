import React from 'react';
import { useSelector } from 'react-redux';

const experiences = [
    {
        role: 'Front End Devloper',
        company: 'Zeal Interactive Services',
        duration: 'Jully 2024 - April 2025',
        description: 'Developed responsive, user-friendly interfaces using React.js and Tailwind CSS.Collaborated with designers and backend developers to deliver seamless web experiences.Optimized UI components for performance and cross-browser compatibility.Participated in code reviews and contributed to improving front-end workflows.',
    },

    {
        role: 'Front End Devloper',
        company: 'Cancer Mitr',
        duration: 'May 2025 - Present',
        description: 'Developed responsive web applications and CRM software using React.js and Tailwind CSS. Collaborated with designers and backend developers to deliver seamless web experiences.Optimized UI components for performance and cross-browser compatibility.Participated in code reviews and contributed to improving front-end workflows. and manage CRM software for Cancer Mitr.',
    },

];

const Experience = () => {
    const bgcolor = useSelector((state) => state.theme.value);
    const textcolors = useSelector((state) => state.theme.textcolor)

    return (
        <section className="py-10 px-4 md:px-20" style={{ backgroundColor: bgcolor, color: textcolors }}>
            <h2 className="text-3xl font-bold text-center mb-8">
                Experience
            </h2>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className=" p-6 rounded-lg shadow-amber-200 shadow-lg transition duration-300"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between">
                            <h3 className="text-xl font-semibold ">
                                {exp.role} - <span className="text-indigo-500">{exp.company}</span>
                            </h3>
                            <span className=" mt-2 md:mt-0">
                                {exp.duration}
                            </span>
                        </div>
                        <p className="mt-2">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
