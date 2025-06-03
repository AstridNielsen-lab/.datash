import React from 'react';
import { Github, Heart, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 relative">
      {/* Digital noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">DATASH</span>
              <span className="text-neon-blue ml-2">v1.0.0</span>
            </div>
            <p className="text-gray-400 max-w-md">
              An intelligent terminal assistant for programmers to interact with databases,
              process data, and automate tasks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-neon-blue transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#downloads" className="text-gray-400 hover:text-neon-blue transition-colors">
                    Downloads
                  </a>
                </li>
                <li>
                  <a href="#docs" className="text-gray-400 hover:text-neon-blue transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#support" className="text-gray-400 hover:text-neon-blue transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support the Project</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://github.com/AstridNielsen-lab/Datash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-neon-pink transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span>Star on GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-neon-pink transition-colors"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    <span>Become a Sponsor</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-neon-pink transition-colors"
                  >
                    <Coffee className="w-5 h-5 mr-2" />
                    <span>Buy us a coffee</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Datash Project. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Made with <span className="text-neon-pink">♥</span> by the Datash Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;