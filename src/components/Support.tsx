import React, { useState, useRef, useEffect } from 'react';
import { Send, Github, Mail, Users, MessageSquare } from 'lucide-react';
import { typeEffect } from '../utils/animations';

const Support: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const assistantResponseRef = useRef<HTMLDivElement>(null);
  
  const demoResponses = [
    "I can help you with that! Database connections require proper configuration of your connection string. Check our documentation for examples.",
    "Git integration in Datash allows you to manage repositories directly from the terminal. Try the command 'datash git status' to get started.",
    "If you're experiencing issues with the API, make sure you've properly set up your authentication keys in the config file.",
    "You can install additional modules using 'datash install <module-name>'. This will automatically configure the dependencies for you."
  ];
  
  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '') return;
    
    // Add user message
    setChatMessages([...chatMessages, { text: message, isUser: true }]);
    setMessage('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const responseIndex = Math.floor(Math.random() * demoResponses.length);
      const newMessage = { text: '', isUser: false };
      setChatMessages(prev => [...prev, newMessage]);
      
      // Use the typing effect for the AI response
      if (assistantResponseRef.current) {
        typeEffect(
          assistantResponseRef.current,
          [demoResponses[responseIndex]],
          20,
          0,
          () => {
            setChatMessages(prev => 
              prev.map((msg, i) => 
                i === prev.length - 1 ? { ...msg, text: demoResponses[responseIndex] } : msg
              )
            );
          }
        );
      }
    }, 800);
  };
  
  return (
    <section id="support" className="py-20 bg-slate-900 relative">
      {/* Digital noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-neon-blue">Support</span> & Resources
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get help with Datash through various channels and resources.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Channels</h3>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Github className="w-6 h-6 mr-3 text-neon-pink" />
                <h4 className="text-xl font-semibold text-white">GitHub</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Open issues, contribute to the project, or explore the code on our GitHub repository.
              </p>
              <a
                href="https://github.com/AstridNielsen-lab/Datash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-blue hover:text-neon-pink transition-colors"
              >
                Visit GitHub Repository →
              </a>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 mr-3 text-neon-green" />
                <h4 className="text-xl font-semibold text-white">Email Support</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Reach out to our support team directly for complex issues or business inquiries.
              </p>
              <a
                href="mailto:support@datash.dev"
                className="text-neon-blue hover:text-neon-pink transition-colors"
              >
                support@datash.dev
              </a>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 mr-3 text-neon-purple" />
                <h4 className="text-xl font-semibold text-white">Community Forum</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Join our community forum to connect with other Datash users, share tips, and get help.
              </p>
              <a
                href="#"
                className="text-neon-blue hover:text-neon-pink transition-colors"
              >
                Join the Discussion →
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6">Chat with AI Assistant</h3>
            
            <div className="bg-slate-800 rounded-lg overflow-hidden flex flex-col h-[400px]">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="terminal-button bg-red-500"></span>
                  <span className="terminal-button bg-yellow-500"></span>
                  <span className="terminal-button bg-green-500"></span>
                </div>
                <div className="terminal-title">Datash Assistant</div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="chat-message">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center mr-3">
                      <MessageSquare className="w-4 h-4 text-neon-blue" />
                    </div>
                    <div className="bg-slate-700 rounded-lg p-3 text-gray-300 max-w-[80%]">
                      Hello! I'm the Datash AI assistant. How can I help you with database operations or terminal commands today?
                    </div>
                  </div>
                </div>
                
                {chatMessages.map((msg, index) => (
                  <div key={index} className="chat-message">
                    <div className={`flex items-start ${msg.isUser ? 'justify-end' : ''}`}>
                      {!msg.isUser && (
                        <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center mr-3">
                          <MessageSquare className="w-4 h-4 text-neon-blue" />
                        </div>
                      )}
                      <div className={`rounded-lg p-3 max-w-[80%] ${
                        msg.isUser 
                          ? 'bg-neon-blue/20 text-white' 
                          : 'bg-slate-700 text-gray-300'
                      }`}>
                        {index === chatMessages.length - 1 && !msg.isUser && msg.text === '' ? (
                          <div ref={assistantResponseRef}></div>
                        ) : (
                          msg.text
                        )}
                      </div>
                      {msg.isUser && (
                        <div className="w-8 h-8 rounded-full bg-neon-pink/20 flex items-center justify-center ml-3">
                          <span className="text-neon-pink text-sm font-bold">U</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef}></div>
              </div>
              
              <form onSubmit={handleSubmit} className="p-3 border-t border-slate-700 flex">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask a question about Datash..."
                  className="flex-1 bg-slate-700 border-none text-white px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-neon-blue hover:bg-neon-blue/80 text-white px-4 py-2 rounded-r-md flex items-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;