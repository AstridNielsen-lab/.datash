import React from 'react';
import { Github, Heart, Coffee, Phone, Mail, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 relative">
      {/* Digital noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">DATASH</span>
              <span className="text-neon-blue ml-2">v1.0.0</span>
            </div>
            <p className="text-gray-400 mb-4">
              An intelligent terminal assistant for programmers to interact with databases,
              process data, and automate tasks.
            </p>
            <p className="text-gray-400">
              Developed by Like Look Solutions
            </p>
          </div>
          
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
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5511970603441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-neon-pink transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+55 11 97060-3441</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:juliocamposmachado@gmail.com"
                  className="flex items-center text-gray-400 hover:text-neon-pink transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <span>juliocamposmachado@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/juliocamposmachado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-neon-pink transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/likelooksolutionsti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-neon-pink transition-colors"
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  <span>Like Look Solutions</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support the Project</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-semibold text-gray-300 mb-2">PIX/PayPal</h5>
                <p className="text-gray-400 text-sm break-all">radiotatuapefm@gmail.com</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-300 mb-2">Bitcoin</h5>
                <p className="text-gray-400 text-sm break-all">bc1qmjf00jqttk2kgemxtxh0hv4xp8fqztnn23cuc2</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-300 mb-2">Ethereum</h5>
                <p className="text-gray-400 text-sm break-all">0x7481B4591e7f0DFAD23b884E78C46F0c207a3E35</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-300 mb-2">Litecoin</h5>
                <p className="text-gray-400 text-sm break-all">ltc1qxytts52mykr2u83x6ghwllmu7d524ltt702mcc</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Like Look Solutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-neon-pink" />
              <span>by Julio Campos Machado</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;