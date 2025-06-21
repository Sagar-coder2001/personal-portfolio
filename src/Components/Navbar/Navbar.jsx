import React, { useState, useEffect } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logolight from '../../assets/banner-img.png';

import { useDispatch, useSelector } from 'react-redux';
import { dark, white } from '../../Feture/changetheme';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [changeicon, setChangeicon] = useState(true)
  const bgcolor = useSelector((state) => state.theme.navbar)
  const textcolors = useSelector((state) => state.theme.textcolor)
  const dispatch = useDispatch();

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle full mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Toggle individual submenus
  const toggleSubMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const changeTheme = () => {
    if (bgcolor == 'black') {
      dispatch(white());
      localStorage.removeItem('theme');
      setChangeicon(false)
    }
    else {
      dispatch(dark())
      setChangeicon(true)
    }
  }

  return (
    <div>
      <nav className={`w-full fixed top-0 left-0 z-[30] transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}>
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logolight}
              alt=""
              className="h-12 transition-all duration-300 rounded-full"
            />
            <span className='pl-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-400 via-yellow-400 to-blue-500'>PORTFOLIO</span>
          </div>

          {/* Desktop Navigation */}
          {/* <ul className="hidden md:flex space-x-6 font-medium text-gray-700 items-center">
            {["Home", "Pages", "Services", "Blog"].map((menu, idx) => (
              <li key={idx} className="relative group">
                <button className={`hover:text-blue-600 transition-colors duration-300 ${bgcolor === 'black' ? 'text-white' : 'text-gray-700'}`}>{menu} ▾</button>
                <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition duration-300 min-w-[200px] z-20">
                  {["Home main", "Creative agency", "Reports"].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:text-blue-600 transition ${bgcolor === 'black' ? 'text-white' : 'text-gray-700'}`}
              >
                Contact
              </a>
            </li>
          </ul> */}

          {/* Get In Touch Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className={`relative group inline-flex items-center px-6 py-2 border rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden 
      ${bgcolor === 'black' ? 'border-white text-white' : 'border-black text-black'}`}
            >
              <span
                className={`relative z-10 transition-all duration-300 
        ${bgcolor === 'black' ? 'group-hover:text-black' : 'group-hover:text-white'}`}
              >
                Get in Touch
              </span>
              <span
                className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0 rounded-full 
        ${bgcolor === 'black' ? 'bg-white' : 'bg-black'}`}
              ></span>
            </button>
          </div>

          <div>
            <button
              onClick={changeTheme}
              className={`${bgcolor === 'black' ? 'text-white' : 'text-black'} `}
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-all duration-300">
                <motion.div
                  key={bgcolor}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 180, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {bgcolor === 'black' ? (
                    <FiSun className="w-5 h-5" />
                  ) : (
                    <FiMoon className="w-5 h-5" />
                  )}
                </motion.div>
                {bgcolor === 'black' ? 'Light' : 'Dark'}
              </span>
              <span
                className={`absolute inset-0 ${bgcolor === 'black' ? 'bg-white' : 'bg-black'
                  } scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0 rounded-full`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <FiMenu  className={`text-2xl ${bgcolor === 'black' ? 'text-white' : 'text-gray-700'}`}/>
            </button>
          </div>
        </div>


      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Slide-In Menu */}
            <motion.div
              className="fixed top-1/2 right-0 transform -translate-y-1/2 w-72 h-[100%] shadow-2xl z-50 p-6 rounded-l-2xl flex flex-col justify-between"
              initial={{ x: '100%' }}
              style={{backgroundColor : bgcolor , color : textcolors}}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div>
                {/* Logo + Close */}
                <div className="flex justify-between items-center mb-8">
                <img
              src={logolight}
              alt="Tizzy Logo"
              className="h-10 transition-all duration-300"
            />
                  <button onClick={toggleMenu}>
                    <FiX className={`text-3xl text-gray-500 hover:text-red-500 transition duration-300 ${bgcolor === 'black' ? 'text-white' : 'text-gray-700'}`} />
                  </button>
                </div>

                {/* Mobile Accordion Menu */}
                {/* <ul className="space-y-4 text-[16px] font-medium text-gray-800 text-center" style={{backgroundColor : bgcolor , color : textcolors}}>
                  {[...Array(1)].map((_, i) => (
                    <li key={i} className="relative">
                      <button
                        className="w-full text-left px-3 cursor-pointer py-2 flex justify-center items-center rounded hover:bg-[#aacdb3] transition duration-300"
                        onClick={() => toggleSubMenu(i)}
                        style={{backgroundColor : bgcolor , color : textcolors}}
                      >
                        Menu {openMenu === i ? '▲' : '▼'}
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openMenu === i ? 'max-h-40 mt-2' : 'max-h-0'
                          }`}
                      >
                        <ul className="bg-white rounded shadow px-4 py-2 space-y-2">
                          <li>
                            <a href="#" className="block text-sm hover:text-blue-600 text-gray-950">
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block text-sm hover:text-blue-600 text-gray-950">
                              Settings
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block text-sm hover:text-blue-600 text-gray-950">
                              Reports
                            </a>
                          </li>
                        </ul>
                       
                      </div>
                      
                    </li>
                    
                  ))}
                   <li>
                            <a href="#" className="block text-md font-bold hover:text-blue-600 text-gray-950">
                              Conatact us
                            </a>
                          </li>
                </ul> */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
