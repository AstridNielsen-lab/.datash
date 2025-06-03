import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Terminal, Database, GitBranch, Shield, Send } from 'lucide-react';
import { typeEffect } from '../utils/animations';
import { generateResponse } from '../utils/api';

const Hero: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [conversation, setConversation] = useState<Array<{ text: string; isUser: boolean }>>([]);

  useEffect(() => {
    // Remove window.scrollTo since we want the page to start at the top naturally
    if (terminalRef.current) {
      const text = [
        'Initializing Datash AI...',
        'Loading database modules...',
        'Setting up shell integration...',
        'Ready for command input'
      ];
      
      typeEffect(terminalRef.current, text, 40, 500);
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const input = userInput;
    setUserInput('');
    setIsLoading(true);
    setError(null);
    setConversation(prev => [...prev, { text: input, isUser: true }]);

    try {
      const response = await generateResponse(input);
      if (response.startsWith('Error:')) {
        setError(response.substring(7));
        setConversation(prev => [...prev, { text: response, isUser: false }]);
      } else {
        setConversation(prev => [...prev, { text: response, isUser: false }]);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      setConversation(prev => [...prev, { text: `Error: ${errorMessage}`, isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-16 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <div className="absolute inset-0 grid-overlay"></div>
      
      <div className="container mx-auto px-4 py-8 z-10">
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
              <div className="terminal-title text-center font-bold">Datash Assistant</div>
            </div>
            <div className="terminal-body">
              <div ref={terminalRef} className="terminal-text text-center mb-4"></div>
              <div className="space-y-4">
                {conversation.map((message, index) => (
                  <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div 
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.isUser 
                          ? 'bg-neon-blue/20 text-white' 
                          : message.text.startsWith('Error:')
                            ? 'bg-red-500/20 text-red-300'
                            : 'bg-slate-700 text-gray-300'
                      }`}
                    >
                      {message.isUser ? `> ${message.text}` : message.text}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef}></div>
              </div>
              <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder={isLoading ? "Processing..." : "Type your command..."}
                  disabled={isLoading}
                  className="flex-1 bg-slate-800 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-blue"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-neon-blue hover:bg-neon-blue/80 text-white px-4 py-2 rounded-md flex items-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {isLoading && (
                <div className="text-center mt-2 text-neon-blue">
                  Processing<span className="loading-dots">...</span>
                </div>
              )}
              {error && (
                <div className="text-red-400 text-sm mt-2 text-center">
                  {error}
                </div>
              )}
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
