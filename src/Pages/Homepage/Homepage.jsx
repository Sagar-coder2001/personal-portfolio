import React from 'react'
import Main from '../../Components/Main/Main'
import Service from '../../Components/Service/Service'
// import About from '../../Components/About/About'
// import Features from '../../Components/Features/Features'
// import Price from '../../Components/Price/Price'
// import Revenue from '../../Components/Revenue/Revenue'
import Blog from '../../Components/Blog/Blog'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Experience from '../../Components/Experince/Experience'
import Skill from '../../Components/Skill/Skill'
// import Faq from '../../Components/Faq/Faq'

const Homepage = () => {
  return (
    <>
   <Main/>
   <Service/>
   {/* <About/> */}
   <Experience/>
   {/* <Price/> */}
   {/* <Revenue/> */}
   <Testimonials/>
   {/* <Blog/> */}
   {/* <Faq/> */}
   <Skill/>
   </>
  )
}

export default Homepage