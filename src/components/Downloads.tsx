import React, { useState } from 'react';
import { Download, ArrowRight, FileCode, PackageOpen, Star } from 'lucide-react';
import { downloadsData } from '../data/downloadsData';

type DownloadTab = 'all' | 'components' | 'utils';

const Downloads: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DownloadTab>('all');

  const filteredDownloads = activeTab === 'all' 
    ? downloadsData 
    : downloadsData.filter(download => download.type === activeTab);

  return (
    <section id="downloads" className="py-20 bg-slate-800 relative">
      {/* Digital noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-neon-pink">Download</span> Datash
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get everything you need to start using Datash. All files are directly from our
            GitHub repository.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="flex bg-slate-900 rounded-lg p-1">
            {(['all', 'components', 'utils'] as DownloadTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab
                    ? 'bg-neon-blue/20 text-neon-blue'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDownloads.map((download, index) => (
            <div key={index} className="bg-slate-900 rounded-lg overflow-hidden shadow-neon-sm hover:shadow-neon-md transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {download.type === 'all' ? (
                    <PackageOpen className="w-6 h-6 mr-3 text-neon-pink" />
                  ) : download.type === 'components' ? (
                    <FileCode className="w-6 h-6 mr-3 text-neon-blue" />
                  ) : (
                    <Star className="w-6 h-6 mr-3 text-neon-purple" />
                  )}
                  <h3 className="text-xl font-bold text-white">{download.name}</h3>
                </div>
                <p className="text-gray-400 mb-4 h-20">{download.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{download.size}</span>
                  <a
                    href={download.url}
                    className="flex items-center text-neon-blue hover:text-neon-pink transition-colors"
                    download
                  >
                    <Download className="w-4 h-4 mr-1" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-slate-900 rounded-lg p-6 inline-block">
            <h3 className="text-xl font-bold mb-2 text-white">System Requirements</h3>
            <ul className="text-left text-gray-400 mb-4">
              <li className="flex items-center mb-2">
                <ArrowRight className="w-4 h-4 mr-2 text-neon-blue" />
                <span>Python 3.8 or higher</span>
              </li>
              <li className="flex items-center mb-2">
                <ArrowRight className="w-4 h-4 mr-2 text-neon-blue" />
                <span>OS: Windows, macOS, Linux</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-neon-blue" />
                <span>RAM: 4GB minimum, 8GB recommended</span>
              </li>
            </ul>
            <a
              href="https://github.com/AstridNielsen-lab/Datash"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;