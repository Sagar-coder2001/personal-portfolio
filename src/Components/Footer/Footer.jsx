import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone } from "react-icons/fi";
import { useSelector } from "react-redux";
import logo from '../../assets/logo.png';

export default function Footer() {
  const bgcolor = useSelector((state) => state.theme.navbar);
  const txtcolor = useSelector((state) => state.theme.textcolor);

  return (
    <footer className="w-full pt-10 pb-6" style={{ backgroundColor: bgcolor, color: txtcolor }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Me + Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-sm mb-4">
              Frontend Developer focused on creating responsive and user-friendly web apps using React and Tailwind.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <FiPhone />
                <span>+91 7498778315</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail />
                <a href="mailto:your@email.com" className="hover:underline">
                  Shindesagar01677@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center items-start">
            {/* <img src={logo} alt="Logo" className="w-20 h-20 object-contain" /> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#about" className="hover:underline">About Me</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="mailto:your@email.com" className="hover:underline">Email Me</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <FiTwitter size={20} />
            </a>
          </div>

          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Name. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
