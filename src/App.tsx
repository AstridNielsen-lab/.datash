import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Downloads from './components/Downloads';
import Documentation from './components/Documentation';
import Faq from './components/Faq';
import Support from './components/Support';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import { initScrollAnimations } from './utils/animations';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Initialize scroll animations when content is loaded
    if (!loading) {
      initScrollAnimations();
    }
  }, [loading]);
  
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Features />
          <Downloads />
          <Documentation />
          <Faq />
          <Support />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;