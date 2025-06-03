import React, { useEffect, useRef } from 'react';
import { ChevronDown, Terminal, Database, GitBranch, Shield } from 'lucide-react';
import { typeEffect } from '../utils/animations';

const Hero: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      const text = [
        '> Initializing Datash AI...',
        '> Loading database modules...',
        '> Setting up shell integration...',
        '> Ready for command input'
      ];
      
      typeEffect(terminalRef.current, text, 40, 500);
    }
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-slate-900">
      {/* Digital noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      
      {/* Glowing grid lines */}
      <div className="absolute inset-0 grid-overlay"></div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 glitch-heading">
              <span className="text-white">The Future of</span>
              <br />
              <span className="text-neon-blue">Terminal Intelligence</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
              An intelligent terminal assistant for programmers to interact with databases,
              process data, and automate tasks with advanced AI capabilities.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-neon-blue" />
                <span className="text-gray-300">Terminal-based</span>
              </div>
              <div className="flex items-center">
                <Database className="w-5 h-5 mr-2 text-neon-pink" />
                <span className="text-gray-300">Multi-database Support</span>
              </div>
              <div className="flex items-center">
                <GitBranch className="w-5 h-5 mr-2 text-neon-purple" />
                <span className="text-gray-300">Git Integration</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-neon-green" />
                <span className="text-gray-300">Privacy-focused</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#downloads" className="btn-primary">
                Download Now
              </a>
              <a href="https://github.com/AstridNielsen-lab/Datash" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                View on GitHub
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 terminal-container w-full">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button bg-red-500"></span>
                <span className="terminal-button bg-yellow-500"></span>
                <span className="terminal-button bg-green-500"></span>
              </div>
              <div className="terminal-title">datash ~ terminal</div>
            </div>
            <div className="terminal-body">
              <div ref={terminalRef} className="terminal-text"></div>
              <div className="terminal-cursor">_</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToFeatures} className="text-neon-blue hover:text-neon-pink transition-colors">
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;