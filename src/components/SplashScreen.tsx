import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing Datash');
  
  useEffect(() => {
    const loadingTexts = [
      'Initializing Datash',
      'Loading AI modules',
      'Configuring database drivers',
      'Setting up environment',
      'Launching terminal interface'
    ];
    
    let currentTextIndex = 0;
    
    const textInterval = setInterval(() => {
      currentTextIndex = (currentTextIndex + 1) % loadingTexts.length;
      setLoadingText(loadingTexts[currentTextIndex]);
    }, 800);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          clearInterval(textInterval);
          
          // Finish loading after a slight delay
          setTimeout(() => {
            onFinish();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 400);
    
    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onFinish]);
  
  return (
    <div className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Digital noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 grid-overlay"></div>
      
      <div className="text-center z-10 glitch-container">
        <Terminal className="w-20 h-20 mb-6 text-neon-blue glitch-effect mx-auto" />
        <h1 className="text-5xl md:text-6xl font-bold mb-8 glitch-heading">
          <span>DATA</span><span className="text-neon-pink">SH</span>
        </h1>
        
        <div className="w-64 md:w-80 mx-auto mb-8">
          <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-blue to-neon-pink rounded-full"
              style={{ width: `${progress}%`, transition: 'width 0.4s ease-out' }}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-500 text-xs">Loading</span>
            <span className="text-neon-blue text-xs">{Math.round(progress)}%</span>
          </div>
        </div>
        
        <p className="text-gray-400 terminal-loading">
          {loadingText}<span className="loading-dots">...</span>
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;