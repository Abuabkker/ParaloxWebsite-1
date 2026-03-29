import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCurrency } from './hooks/useCurrency';
import './styles/global.css';
import { Nav }            from './components/ui/Nav';
import { Footer }         from './components/ui/Footer';
import { ParticleLoader } from './components/ui/ParticleLoader';
import { HomePage }       from './pages/HomePage';
import { AboutPage }      from './pages/AboutPage';
import { ServicesPage }   from './pages/ServicesPage';
import { PackagesPage }   from './pages/PackagesPage';
import { GalleryPage }    from './pages/GalleryPage';
import { ContactPage }    from './pages/ContactPage';
import { VapiWidget }     from './components/ui/VapiWidget';

export default function App() {
  const [loaded,   setLoaded]   = useState(false);
  const [showSite, setShowSite] = useState(false);
  const [page,     setPage]     = useState('home');
  const [dark,     setDark]     = useState(false);
  const { fmt } = useCurrency();

  // Absolute safety net — show site after 15s even if loader never calls onDone
  useEffect(() => {
    const t = setTimeout(() => {
      setLoaded(true);
      setShowSite(true);
    }, 15000);
    return () => clearTimeout(t);
  }, []);

  const handleDone = () => {
    setLoaded(true);
    setTimeout(() => setShowSite(true), 300);
  };

  const pages = {
    home:     <HomePage     setPage={setPage} dark={dark} fmt={fmt} />,
    about:    <AboutPage    setPage={setPage} dark={dark} />,
    services: <ServicesPage setPage={setPage} dark={dark} />,
    packages: <PackagesPage setPage={setPage} dark={dark} />,
    gallery:  <GalleryPage  dark={dark} />,
    contact:  <ContactPage  dark={dark} />,
  };

  return (
    <div style={{
      background: dark ? '#080510' : '#F8F5FF',
      color: dark ? '#F0E8FF' : '#1A0A2E',
      minHeight: '100vh',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      {/* Particle loader */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.55 }}
          >
            <ParticleLoader onDone={handleDone} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main site */}
      <AnimatePresence>
        {showSite && (
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
          >
            <Nav page={page} setPage={setPage} dark={dark} setDark={setDark} />
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 9 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.33, ease: [0.22, 1, 0.36, 1] }}
              >
                {pages[page]}
              </motion.div>
            </AnimatePresence>
            <Footer setPage={setPage} dark={dark} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* VAPI voice widget — always visible once site loads */}
      {showSite && <VapiWidget dark={dark} />}
    </div>
  );
}
