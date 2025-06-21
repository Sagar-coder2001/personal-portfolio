import './App.css';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { CircleLoader } from 'react-spinners';
// import * as THREE from 'three';
// import CLOUDS from 'vanta/dist/vanta.net.min';

// Lazy loaded components
const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const Main = lazy(() => import('./Components/Main/Main'));
const Experience = lazy(() => import('./Components/Experince/Experience'));
const Testimonials = lazy(() => import('./Components/Testimonials/Testimonials'));
const Skill = lazy(() => import('./Components/Skill/Skill'));
const Service = lazy(() => import('./Components/Service/Service'));

function App() {
  // const vantaRef = useRef(null);
  // const [vantaEffect, setVantaEffect] = useState(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       CLOUDS({
  //         el: vantaRef.current,
  //         THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         minHeight: 900.0,
  //         minWidth: 200.0,
  //         skyColor: 0x151824,
  //         cloudColor: 0xffffff,
  //         cloudShadowColor: 0x000000,
  //         backgroundColor: 0x0e1027,
  //       })
  //     );
  //   }

  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

  return (
    // <div ref={vantaRef} className="relative h-11/12 w-full overflow-hidden border-amber-700" style={{position: 'relative', width: '100%', height: '100%', zIndex: -100}}>
      <Suspense fallback={<div className="flex items-center justify-center h-screen"><CircleLoader color="#f65a0c" size={90} /></div>}>
        <Navbar />
        <Main />
        <Service />
        {/* <About/> */}
        <Experience />
        {/* <Price/> */}
        {/* <Revenue/> */}
        <Testimonials />
        {/* <Blog/> */}
        {/* <Faq/> */}
        <Skill />
        <Footer />
      </Suspense>
    // </div>
  );
}

export default App;
