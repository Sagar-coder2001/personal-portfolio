// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
import user from '../../assets/download.png'
// import { useSelector } from 'react-redux';

// const testimonials = [
//     {
//         rating: 5,
//         name: 'apurva patil',
//         position: 'Mern Stack Developer',
//         image: user,
//         message: "I sincerely thank my friend for their exceptional work in designing a professional and user-friendly website. Their expertise, creativity, and attention to detail have truly elevated my online presence. I deeply appreciate their dedication and outstanding effort."
//     },
//     {
//         rating: 4.7,
//         name: 'rushi ture',
//         position: 'full stack developer',
//         image: user,
//         message: "I want to express my sincere gratitude to my friend for their exceptional work on my website. Their professionalism, innovative approach, and keen attention to detail have delivered a polished and highly functional platform. Thank you for your incredible effort!"
//     },
//     {
//         rating: 5,
//         name: 'ashutosh savant',
//         position: 'Software Engineer @Techie',
//         image: user,
//         message: "I want to express my sincere gratitude to my friend for their exceptional work on my website. Their professionalism, innovative approach, and keen attention to detail have delivered a polished and highly functional platform. Thank you for your incredible effort!"
//     }
// ];

// export default function Testimonials() {
//     const [index, setIndex] = useState(0);
//     const bgcolor = useSelector((state) => state.theme.value)
//     const txtcolor = useSelector((state) => state.theme.textcolor)

//     const handlePrev = () => {
//         setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//     };

//     const handleNext = () => {
//         setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//     };

//     return (
//         <section className="py-8 px-6 md:px-16" style={{backgroundColor : bgcolor , color : txtcolor}}>
//             <div className="max-w-4xl mx-auto">
//                 {/* Header */}
//                 <div className="flex flex-col md:flex-row justify-between items-center mb-10">
//                     <h2 className="text-2xl md:text-3xl font-bold">
//                     Here's what my friends have to say about my work.
//                     </h2>
//                     <div className="flex items-center gap-4 mt-4 md:mt-0">
//                         <div className="text-lg font-semibold bg-gray-100 rounded-full px-4 py-2 shadow text-gray-950">
//                             4.9
//                         </div>
//                         <div className="text-sm text-gray-500">★★★★★ <span className="ml-2">(748 Reviews)</span></div>
//                     </div>
//                 </div>

//                 {/* Testimonial Card */}
//                 <div className="transition duration-500 ease-in-out">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.4 }}
//                             className="bg-gradient-to-br from-lime-50 via-white to-lime-100 p-6 rounded-xl shadow-md border"
//                         >
//                             <div className="text-yellow-500 mb-3">
//                                 {'★'.repeat(Math.floor(testimonials[index].rating))}
//                             </div>
//                             <p className="text-gray-700 mb-6">{testimonials[index].message}</p>
//                             <div className="flex items-center gap-4">
//                                 <img
//                                     src={testimonials[index].image}
//                                     className="w-10 h-10 rounded-full object-cover "
//                                     alt={testimonials[index].name}
//                                 />
//                                 <div>
//                                     <p className="font-bold text-gray-950">{testimonials[index].name}</p>
//                                     <p className="text-xs text-gray-500">{testimonials[index].position}</p>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </AnimatePresence>

//                 </div>

//                 {/* Buttons */}
//                 <div className="flex justify-end items-center mt-10">
//                     <button onClick={handlePrev} className="p-2 rounded-full border hover:bg-gray-100 transition mr-2">&larr;</button>
//                     <button onClick={handleNext} className="p-2 rounded-full border hover:bg-gray-100 transition">&rarr;</button>
//                 </div>
//             </div>
//         </section>
//     );
// }


import { Star } from "lucide-react"

const Testimonials = () => {
    const testimonials = [
        {
            rating: 5,
            name: 'apurva patil',
            position: 'Mern Stack Developer',
            image: user,
            content: "I sincerely thank my friend for their exceptional work in designing a professional and user-friendly website. Their expertise, creativity, and attention to detail have truly elevated my online presence. I deeply appreciate their dedication and outstanding effort."
        },
        {
            name: "Rushi Ture",
            position: 'Full Stack Developer',
            image: user,
            content: "I want to express my sincere gratitude to my friend for their exceptional work on my website. Their professionalism, innovative approach, and keen attention to detail have delivered a polished and highly functional platform. Thank you for your incredible effort!",
            rating: 5,
        },
        {
            name: "Ashutosh Sawant",
            position: 'Network Engineers',
            image: user,
            content: "I want to express my sincere gratitude to my friend for their exceptional work on my website. Their professionalism, innovative approach, and keen attention to detail have delivered a polished and highly functional platform. Thank you for your incredible effort!",
            rating: 5,
        },
    ]

    return (
        <section id="testimonials" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">What My Friends Say About Me</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-lg p-6"
                        >
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                            <div className="flex items-center">
                                <img
                                    src={testimonial.image || "/placeholder.svg"}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                    <p className="text-blue-300 text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
