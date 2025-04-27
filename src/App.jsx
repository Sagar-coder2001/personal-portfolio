import './App.css';
import { Suspense, lazy } from 'react';
import {PuffLoader} from 'react-spinners'

// Lazy loaded components
const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const Homepage = lazy(() => import('./Pages/Homepage/Homepage'));
const Footer = lazy(() => import('./Components/Footer/Footer'));

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen"><PuffLoader color="#42bc08" size={90} /></div>}>
      <Navbar />
      <Homepage />
      <Footer />
    </Suspense>
  );
}

export default App;
