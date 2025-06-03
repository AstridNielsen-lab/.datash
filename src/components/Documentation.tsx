import React, { useState } from 'react';
import { Code, Database, Terminal, GitBranch, ArrowRight } from 'lucide-react';
import { docsData } from '../data/docsData';

type DocTab = 'database' | 'shell' | 'git' | 'data';

const Documentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DocTab>('database');

  const currentDoc = docsData.find(doc => doc.category === activeTab);
  
  return (
    <section id="docs" className="py-20 bg-slate-900 relative">
      {/* Digital noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-neon-purple">Documentation</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn how to leverage the full power of Datash with these code examples and guides.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-slate-800 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-4 text-white">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('database')}
                    className={`w-full text-left flex items-center py-2 px-3 rounded-md ${
                      activeTab === 'database'
                        ? 'bg-neon-purple/20 text-neon-purple'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Database className="w-5 h-5 mr-3" />
                    <span>Database Operations</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('shell')}
                    className={`w-full text-left flex items-center py-2 px-3 rounded-md ${
                      activeTab === 'shell'
                        ? 'bg-neon-blue/20 text-neon-blue'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Terminal className="w-5 h-5 mr-3" />
                    <span>Shell Commands</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('git')}
                    className={`w-full text-left flex items-center py-2 px-3 rounded-md ${
                      activeTab === 'git'
                        ? 'bg-neon-green/20 text-neon-green'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <GitBranch className="w-5 h-5 mr-3" />
                    <span>Git Operations</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('data')}
                    className={`w-full text-left flex items-center py-2 px-3 rounded-md ${
                      activeTab === 'data'
                        ? 'bg-neon-pink/20 text-neon-pink'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Code className="w-5 h-5 mr-3" />
                    <span>Data Processing</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:w-3/4">
            {currentDoc && (
              <div className="bg-slate-800 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">{currentDoc.title}</h3>
                  <p className="text-gray-400 mb-6">{currentDoc.description}</p>
                  
                  <div className="space-y-6">
                    {currentDoc.examples.map((example, index) => (
                      <div key={index} className="space-y-3">
                        <h4 className="text-lg font-semibold text-white flex items-center">
                          <ArrowRight className="w-4 h-4 mr-2 text-neon-blue" />
                          {example.title}
                        </h4>
                        <div className="terminal-code-block">
                          <div className="terminal-code-header">
                            <div className="terminal-buttons">
                              <span className="terminal-button bg-red-500"></span>
                              <span className="terminal-button bg-yellow-500"></span>
                              <span className="terminal-button bg-green-500"></span>
                            </div>
                            <div className="terminal-title">{example.filename}</div>
                          </div>
                          <pre className="terminal-code-body">
                            <code>{example.code}</code>
                          </pre>
                        </div>
                        <p className="text-gray-400 text-sm">{example.explanation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;