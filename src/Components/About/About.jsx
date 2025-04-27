import React, { useState, useEffect } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logolight from '../../assets/logo.png';

import { useDispatch, useSelector } from 'react-redux';
import { dark, white } from '../../Feature/changetheme';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [changeicon, setChangeicon] = useState(true);
  const bgcolor = useSelector((state) => state.theme.navbar);
  const textcolors = useSelector((state) => state.theme.textcolor);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const changeTheme = () => {
    if (bgcolor === 'black') {
      dispatch(white());
      localStorage.removeItem('theme');
      setChangeicon(false);
    } else {
      dispatch(dark());
      setChangeicon(true);
    }
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div>
      <nav className={`w-full fixed top-0 left-0 z-[30] transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-screen-xl mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
          <img src={logolight} alt="Tizzy Logo" className="h-12" />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 font-medium items-center">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className={`hover:text-blue-600 transition-colors duration-300 ${bgcolor === 'black' ? 'text-white' : 'text-gray-700'}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={changeTheme} className={`${bgcolor === 'black' ? 'text-white' : 'text-black'}`}>
              <motion.div key={bgcolor} initial={{ rotate: 0, opacity: 0 }} animate={{ rotate: 180, opacity: 1 }} transition={{ duration: 0.4 }}>
                {bgcolor === 'black' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <FiMenu className={`text-2xl ${bgcolor === 'black' ? 'text-white' : 'text-gray-700'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={toggleMenu} />

            <motion.div
              className="fixed top-0 right-0 w-72 h-full shadow-2xl z-50 p-6 rounded-l-2xl flex flex-col"
              style={{ backgroundColor: bgcolor, color: textcolors }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center mb-8">
                <img src={logolight} alt="Tizzy Logo" className="h-10" />
                <button onClick={toggleMenu}>
                  <FiX className={`text-3xl ${bgcolor === 'black' ? 'text-white' : 'text-gray-700'}`} />
                </button>
              </div>

              <ul className="space-y-6 text-center text-[16px] font-medium">
                {menuItems.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} onClick={toggleMenu} className="block py-2 hover:text-blue-600 transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
