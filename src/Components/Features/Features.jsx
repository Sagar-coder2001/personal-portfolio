import { useSelector } from "react-redux";
import React from "react";
import market from '../../assets/7.png';
import motion1 from '../../assets/9.png';
import creative from '../../assets/20.png';
import desktop from '../../assets/webmail.png';
import spam from '../../assets/spam.png';
import security from '../../assets/security.png';
import { motion } from "framer-motion";



const featuredWorks = [
  {
    title: "DNS Management",
    desc: 'Control and configure DNS settings with ease.',
    date: "February 18, 2024",
    image: market,
  },
  {
    title: "Faster POP, IMAP and SMTP Protocols",
    desc: 'Secure and fast communication protocols for efficient email delivery.',
    date: "January 10, 2024",
    image: motion1,
  },
  {
    title: "Dedicated Control Panel",
    desc: 'Manage your email accounts in just a few clicks with our powerful control panel',
    date: "August 24, 2024",
    image: creative,
  },
  {
    title: "Market Branding",
    date: "February 18, 2024",
    image: desktop,
  },
  {
    title: "Motion Graphics",
    date: "January 10, 2024",
    image: spam,
  },
  {
    title: "Creative Design",
    date: "August 24, 2024",
    image: security,
  },
];

export default function FeaturedWorks() {
  const bgcolor = useSelector((state) => state.theme.value)
  const txtcolor = useSelector((state) => state.theme.textcolor)
  return (
    <section className="relative py-10 px-4 sm:px-6 lg:px-20" style={{ backgroundColor: bgcolor, color: txtcolor }}>
      <div className="text-center mb-16">
        <span className="text-xs tracking-wide font-semibold bg-black text-white px-3 py-1 rounded-full">
          YOUR FEATURED
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Features of Tizzy® Email</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-5"
        >

          Tizzy Mail can be settup automatic or manual modeon any device andin any email application.
          it also her a user freindly webmail interface to access from browser.
          creating your buisness email addressis very fast and easy on tizzy mail for eg.
          sales@yourcompanyname.com
        </motion.div>

      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block relative">
        <div className="relative h-[300vh]">
          {/* Card 1 - Sticks first, centered */}
          <div className="sticky -top-10 h-screen flex items-center justify-center z-10">
            <Card {...featuredWorks[0]} />
          </div>

          {/* Card 2 - Scrolls over Card 1 */}
          <div className="sticky -top-10 h-screen flex items-center justify-center z-20 w-full">
            <Card {...featuredWorks[1]} />
          </div>

          {/* Card 3 - Normal scroll after overlap */}
          <div className="relative h-screen flex items-center justify-center z-29">
            <Card {...featuredWorks[2]} />
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden space-y-10">
        {featuredWorks.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

function Card({ title, date, image, desc }) {
  return (
    <div className="bg-white w-full max-w-4xl p-6 md:p-8 rounded-xl shadow-xl border border-gray-200 transition-all duration-500 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <p className="text-xs text-gray-500">{date}</p>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h3>
      <p className="font-bold text-gray-900">{desc}</p>
      <p className="text-sm text-gray-500 mt-1">View Details →</p>
    </div>
  );
}
