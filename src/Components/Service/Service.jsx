import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import mail from '../../assets/Cart.gif'
import Cloud from '../../assets/Video.gif'
import shield from '../../assets/queue.svg'
import hero from '../../assets/hero.png'
import library from '../../assets/library.jpg'
import chat from '../../assets/chat.gif'




export default function ServicesSection() {
  const bgcolor = useSelector((state) => state.theme.value)
  const bgcolor1 = useSelector((state) => state.theme.navbar)
  const txtcolor = useSelector((state) => state.theme.textcolor)
  const services = [
    {
      title: "Student Learning Management System",
      desc: "A web app where instructors can create and manage courses, while students can enroll, view content, and track progress. Built with role-based access for students and instructors.",
      img: Cloud,
      a: "https://github.com/Sagar-coder2001/student-LMS",
      live: 'https://student-lms-rho.vercel.app/'
    },
   
    {
      title: "Chat Application in Mern",
      desc: "This is a full-stack real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO for bi-directional, low-latency communication. The app enables users to register, log in, and engage in instant messaging with others in a secure and responsive environment.",
      img: chat,
      a: "https://github.com/Sagar-coder2001/Mern-Chat-App",
      live: 'https://mern-chat-app-xi-ochre.vercel.app/'
    },
    {
      title: "Book Store UI",
      desc: "This project is a visually appealing, static book store interface built using React and Tailwind CSS. The focus is on delivering a clean, responsive design with interactive elements to enhance user engagement.",
      img: library,
      a: "https://github.com/Sagar-coder2001/Book_Store",
      live: 'https://book-store-six-plum.vercel.app/'
    },
    {
      title: "Metaverse VR UI",
      desc: "This project is a futuristic, animated Metaverse user interface crafted using React and Tailwind CSS, focused on delivering a highly visual and interactive design. The interface showcases the potential of VR spaces with smooth animations, modern layouts, and immersive hover effects.",
      img: hero,
      a: "https://github.com/Sagar-coder2001/World",
      live: 'https://world-two-orpin.vercel.app/'

    },
    {
      title: "Mern E-Commerce Project",
      desc: "A full-stack e-commerce app where users can browse, add to cart, and place orders. Admins can manage products and view or update orders through a secure dashboard. Built using MongoDB, Express, React, and Node.js.",
      img: mail,
      a: "https://github.com/Sagar-coder2001/sagar---E",
      live: 'https://sagar-e.vercel.app/'
    },
    {
      title: "Hotel Queue Managment System",
      desc: "An ongoing project to streamline hotel check-in by managing guest queues digitally, reducing wait times, and improving service efficiency.",
      img: shield,
      a: "https://github.com/Sagar-coder2001/HotelAdminDashboard-Queue"
    }
  ];

  return (
    <div className="px-6 py-12 lg:px-20 font-sans" style={{ backgroundColor: bgcolor, color: txtcolor }}>
      {/* Header + Button */}
      <div className="flex justify-between items-center mb-12 flex-col lg:flex-row gap-6 lg:gap-0">
        <div className="text-center lg:text-left">
          <p className="font-bold uppercase tracking-wides text-lg">
            Projects
          </p>
        </div>

        {/* Animated Button */}
        <button
          className={`relative group inline-flex items-center px-6 py-2 border rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden 
      ${bgcolor1 === 'black' ? 'border-white text-white' : 'border-black text-black'}`}
        >
          <span
            className={`relative z-10 transition-all duration-300 
        ${bgcolor1 === 'black' ? 'group-hover:text-black' : 'group-hover:text-white'}`}
          >
            Get in Touch
          </span>
          <span
            className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0 rounded-full 
        ${bgcolor1 === 'black' ? 'bg-white' : 'bg-black'}`}
          ></span>
        </button>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}

            key={index}
            className="relative group border border-gray-300 rounded-xl p-6 text-gray-800 bg-white 
                lg:transition-all lg:duration-300 lg:hover:scale-105 overflow-hidden"
          >
            <img src={service.img} alt="" className="w-18 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

            {/* Show always on small, show on hover on large */}
            <p className="text-sm text-gray-600 transition-all duration-300 
                lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
              {service.desc}
            </p>

            <div className="absolute top-4 right-4 text-2xl font-bold text-gray-200">
              {`0${index + 1}`}
            </div>

            <div className="mt-4 flex justify-around gap-4">
            <a
                  href={service.a}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center px-6 py-2 border rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden border-gray-600 text-gray-900 dark:text-gray-900 dark:border-green-400"
                >
                  <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                    View Project
                  </span>
                  <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0 rounded-full bg-gray-600 dark:bg-gray-400"></span>
                </a>

              {service.live && (
                <a
                  href={service.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center px-6 py-2 border rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden border-green-600 text-green-600 dark:text-green-400 dark:border-green-400"
                >
                  <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                    Live Demo
                  </span>
                  <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0 rounded-full bg-green-600 dark:bg-green-400"></span>
                </a>
              )}


            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
