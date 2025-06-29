import "./App.css"
import Experience from "./Components/Experince/Experience"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Main/Main"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
import Skills from "./Components/Skill/Skill"
import Testimonials from "./Components/Testimonials/Testimonials"
import VantaBackground from "./Components/VantaBackground/Vanta-background"

function App() {
  return (
    <div className="relative min-h-screen">
      <VantaBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Testimonials />
        {/* <About /> */}
        <Skills />
        <Footer />
      </div>
    </div>
  )
}

export default App
