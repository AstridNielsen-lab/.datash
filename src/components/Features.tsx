import React from 'react';
import { Database, Terminal, GitBranch, BrainCircuit, Lock, Zap } from 'lucide-react';
import { featuresData } from '../data/featuresData';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}> = ({ icon, title, description, color }) => {
  return (
    <div className="feature-card bg-slate-800/80 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
      <div className={`feature-icon mb-4 p-3 rounded-full w-16 h-16 flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const iconComponents = {
  Database: <Database className="w-8 h-8" />,
  Terminal: <Terminal className="w-8 h-8" />,
  GitBranch: <GitBranch className="w-8 h-8" />,
  BrainCircuit: <BrainCircuit className="w-8 h-8" />,
  Lock: <Lock className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />
};

const colorClasses = {
  blue: "bg-neon-blue/20 text-neon-blue",
  pink: "bg-neon-pink/20 text-neon-pink",
  purple: "bg-neon-purple/20 text-neon-purple",
  green: "bg-neon-green/20 text-neon-green",
  cyan: "bg-cyan-500/20 text-cyan-500",
  yellow: "bg-yellow-400/20 text-yellow-400"
};

const Features: React.FC = () => {
  return (
    <section id="features\" className="py-20 bg-slate-900 relative">
      {/* Digital noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Advanced <span className="text-neon-blue">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Datash combines powerful database tools with intelligent terminal capabilities
            to supercharge your development workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={iconComponents[feature.icon as keyof typeof iconComponents]}
              title={feature.title}
              description={feature.description}
              color={colorClasses[feature.color as keyof typeof colorClasses]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;