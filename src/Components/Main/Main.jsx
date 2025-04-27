import { useSelector } from 'react-redux';
import start from '../../assets/6.png';
import { motion } from "framer-motion";
import banner from '../../assets/banner-img.png'
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle, FaWhatsapp, FaGithub } from 'react-icons/fa';
import google from '../../assets/Google.gif'
import microsoft from '../../assets/Microsoft.gif'


// Component to animate each character
const AnimatedText = ({ text, className = "" }) => {
    const wordAnimation = {
        hidden: { y: 40, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    const words = text.split(" ");

    return (
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {words.map((word, i) => {
                // Apply gradient to first and sixth words
                const isFirst = i === 0;
                const isSixth = word.toUpperCase() === "Sagar";

                const gradientClass = isFirst || isSixth
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-400 via-yellow-400 to-blue-500"
                    : "";

                return (
                    <motion.span
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={wordAnimation}
                        className={`inline-block ${className} ${gradientClass}`}
                    >
                        {word}
                    </motion.span>
                );
            })}
        </div>
    );
};

export default function Main() {
    const headingText = "Hie... I am Sagar Shinde a Front End Developer";

    const bgcolor = useSelector((state) => state.theme.navbar);
    const textcolors = useSelector((state) => state.theme.textcolor)


    const lightGradient = 'radial-gradient(circle,rgba(245, 245, 245, 1) 4%, rgba(235, 242, 179, 1) 100%)';
    const darkGradient = 'radial-gradient(circle at center, #0E1027 0%, #000000 100%)';

    return (
        <div
            className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-br from-green-100 via-white to-pink-100 bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: bgcolor === 'black' ? darkGradient : lightGradient
            }}
        >
            {/* Left section */}
            <div className="max-w-xlmd:text-left space-y-2 flex flex-col items-center justify-center ">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold "
                    style={{ color: textcolors }}>
                    {/* Animate CREATIVE */}
                    <AnimatedText
                        text={headingText}
                        className="text-4xl"
                    />


                    <br />

                    {/* Animate STUDIO with gradient + symbol */}
                    {/* <span className="inline-flex items-center text-black md-ml-25">
                        <span className="text-lime-400 text-8xl md:text-7xl mr-6">
                            <img src={start} alt="" className='w-15 h-15' />
                        </span>
                        <AnimatedText
                            text="STUDIO"
                            className="bg-gradient-to-r from-black via-lime-500 to-lime-300 bg-clip-text text-transparent"
                        />
                    </span> */}
                </h1>

                {/* Logos */}
                {/* <div className="flex gap-6 items-center justify-center lg:justify-start">
            <img src={google} alt="Google Cloud" className="h-20 sm:h-20 " />
            <img src={microsoft} alt="Microsoft Partner" className="h-20 sm:h-20" />
          </div> */}

                <button
                    className={`relative group inline-flex items-center px-6 py-2 border rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden 
      ${bgcolor === 'black' ? 'border-white text-white' : 'border-black text-black'}`}
                >
                    <span
                        className={`relative z-10 transition-all duration-300 
        ${bgcolor === 'black' ? 'group-hover:text-black' : 'group-hover:text-white'}`}
                    >
                        Contact Me
                    </span>
                    <span
                        className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0 rounded-full 
        ${bgcolor === 'black' ? 'bg-white' : 'bg-black'}`}
                    ></span>
                </button>
                <p className="text-gray-600 text-md font-bold md:text-base text-center" style={{ color: textcolors }}>
                    Passionate front-end developer with 1 year of hands-on experience building responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks like React. Focused on clean code, performance, and delivering great user experiences.
                </p>

                {/* Social Media Icons */}
                <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                    <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <IconBox icon={<FaInstagram />} />
                    </a>
                    <a href="https://github.com/Sagar-coder2001" target="_blank" rel="noopener noreferrer">
                        <IconBox icon={<FaGithub />} />
                    </a>
                    <a href="https://linkedin.com/in/sagar-shinde-052b00193" target="_blank" rel="noopener noreferrer">
                        <IconBox icon={<FaLinkedinIn />} />
                    </a>
                    <a href="mailto:youremail@gmail.com">
                        <IconBox icon={<FaGoogle />} />
                    </a>
                    <a href="https://wa.me/yourwhatsappphonenumber" target="_blank" rel="noopener noreferrer">
                        <IconBox icon={<FaWhatsapp />} />
                    </a>
                </div>
            </div>

            {/* Right section */}
            <motion.div
                className="w-full lg:w-1/2 flex justify-center relative mb-8 lg:mb-0 mt-5"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="relative w-60 sm:w-70 md:w-82 lg:w-90">
                    <img
                        src={banner}
                        alt="Happy User"
                        className="w-full object-contain z-10 relative mx-auto"
                    />
                </div>
            </motion.div>
        </div>
    );
}

const IconBox = ({ icon }) => (
    <div className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-blue-600 hover:text-white hover:bg-blue-600 transition">
        {icon}
    </div>
);
