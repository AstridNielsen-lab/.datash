import React from 'react';
import { Github, Mail, Users } from 'lucide-react';

const Support: React.FC = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Need additional help? Check out our <a href="#docs" className="text-neon-blue hover:text-neon-pink">documentation</a> or 
            join our <a href="#" className="text-neon-blue hover:text-neon-pink">Discord community</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
