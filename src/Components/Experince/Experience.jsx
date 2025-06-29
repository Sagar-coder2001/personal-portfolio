// import React from 'react';
// import { useSelector } from 'react-redux';

// const experiences = [
//     {
//         role: 'Front End Devloper',
//         company: 'Zeal Interactive Services',
//         duration: 'Jully 2024 - April 2025',
//         description: 'Developed responsive, user-friendly interfaces using React.js and Tailwind CSS.Collaborated with designers and backend developers to deliver seamless web experiences.Optimized UI components for performance and cross-browser compatibility.Participated in code reviews and contributed to improving front-end workflows.',
//     },

//     {
//         role: 'Front End Devloper',
//         company: 'Cancer Mitr',
//         duration: 'May 2025 - Present',
//         description: 'Manage CRM software. and building pateint app Collaborated with designers and backend developers to deliver seamless web experiences.Optimized UI components for performance and cross-browser compatibility.Participated in code reviews and contributed to improving front-end workflows.',
//     },

// ];

// const Experience = () => {
//     const bgcolor = useSelector((state) => state.theme.value);
//     const textcolors = useSelector((state) => state.theme.textcolor)

//     return (
//         <section className="py-10 px-4 md:px-20" style={{ backgroundColor: bgcolor, color: textcolors }}>
//             <h2 className="text-3xl font-bold text-center mb-8">
//                 Experience
//             </h2>
//             <div className="space-y-6">
//                 {experiences.map((exp, index) => (
//                     <div
//                         key={index}
//                         className=" p-6 rounded-lg shadow-amber-200 shadow-lg transition duration-300"
//                     >
//                         <div className="flex flex-col md:flex-row md:justify-between">
//                             <h3 className="text-xl font-semibold ">
//                                 {exp.role} - <span className="text-indigo-500">{exp.company}</span>
//                             </h3>
//                             <span className=" mt-2 md:mt-0">
//                                 {exp.duration}
//                             </span>
//                         </div>
//                         <p className="mt-2">{exp.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Experience;


import { Calendar, MapPin } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Front End Devloper",
      company: "Zeal Interactive Services",
      location: "Borivali",
      period: "jully 2024 - may 2025",
      description:
        "Developed responsive, user-friendly interfaces using React.js and Tailwind CSS.Collaborated with designers and backend developers to deliver seamless web experiences.Optimized UI components for performance and cross-browser compatibility.Participated in code reviews and contributed to improving front-end workflows",
      achievements: [
        "Architected and developed 3 major client projects",
        "Mentored junior developers and conducted code reviews",
        "Implemented automated testing reducing bugs by 60%",
      ],
    },
    {
      title: "Front End DEveloper",
      company: "Cancer Mitr",
      location: "Andheri",
      period: "may 2025 - present",
      description:
        "Manage CRM software. and building pateint app Collaborated with designers and backend developers to deliver seamless web experiences.Optimized UI components for performance and cross-browser compatibility.Participated in code reviews and contributed to improving front-end workflows.",
      achievements: [
        "Built 15+ responsive websites and web applications",
        "Integrated third-party APIs and payment systems",
        "Optimized database queries improving load times by 50%",
      ],
    }
  ]

  return (
    <section id="experience" className="py-2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-xl text-gray-400">My professional journey and key accomplishments</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-1">{exp.title}</h3>
                  <h4 className="text-blue-300 text-lg font-medium">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-400 mb-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="mr-2 h-4 w-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              {/* <div className="space-y-2">
                <h4 className="text-white font-medium">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
