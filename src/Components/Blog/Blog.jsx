import React from 'react'
import blog from '../../assets/4.jpg'
import blog2 from '../../assets/5.jpg'
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';



const Blog = () => {
    const bgcolor = useSelector((state) => state.theme.value)
    const txtcolor = useSelector((state) => state.theme.textcolor)

    return (
        <div>
            <div className="py-4 px-4 md:px-20" style={{backgroundColor : bgcolor , color : txtcolor}}>
                <div className="text-center mb-10">
                    <span className="inline-block px-3 py-1 bg-gray-200 rounded-full text-sm mb-2 text-gray-950">NEWS & EVENTS</span>
                    <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Blog Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="relative bg-white shadow-lg rounded-xl overflow-hidden group transition transform hover:-translate-y-1">
                        <img src={blog} alt="blog1" className="w-full h-60 object-cover" />
                        <div className="absolute top-4 left-4 bg-lime-400 text-white rounded-md px-3 py-1 font-bold text-center shadow-md">
                            <div className="text-sm">14</div>
                            <div className="text-xs">SEP</div>
                        </div>
                        <div className="p-5">
                            <p className="text-sm text-gray-500 mb-1">PM Zakirjoy • 5 Comments</p>
                            <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-lime-500 transition">
                                Discovery Incommode earnestly commanded
                            </h3>
                            <a href="#" className="text-sm font-semibold text-gray-600 hover:text-lime-600">Continue Reading →</a>
                        </div>
                    </motion.div>

                    {/* Blog Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="relative bg-white shadow-lg rounded-xl overflow-hidden group transition transform hover:-translate-y-1">
                        <img src={blog2} alt="blog2" className="w-full h-60 object-cover" />
                        <div className="absolute top-4 left-4 bg-yellow-400 text-white rounded-md px-3 py-1 font-bold text-center shadow-md">
                            <div className="text-sm">06</div>
                            <div className="text-xs">OCT</div>
                        </div>
                        <div className="p-5">
                            <p className="text-sm text-gray-500 mb-1">PM Zakirjoy • 9 Comments</p>
                            <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-yellow-500 transition">
                                Expression acceptance imprudence particular
                            </h3>
                            <a href="#" className="text-sm font-semibold text-gray-600 hover:text-yellow-600">Continue Reading →</a>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Blog