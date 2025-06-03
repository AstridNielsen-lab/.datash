interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export const featuresData: Feature[] = [
  {
    icon: 'Database',
    title: 'Multi-Database Support',
    description: 'Seamlessly interact with MySQL, PostgreSQL, SQLite, and MongoDB databases using natural language commands.',
    color: 'blue'
  },
  {
    icon: 'Terminal',
    title: 'Intelligent Terminal',
    description: 'Get smart suggestions, autocompletions, and context-aware help for all your terminal commands.',
    color: 'pink'
  },
  {
    icon: 'GitBranch',
    title: 'Git Integration',
    description: 'Manage your repositories, commits, and branches with simplified commands and AI-powered explanations.',
    color: 'purple'
  },
  {
    icon: 'BrainCircuit',
    title: 'Google Gemini Integration',
    description: 'Leverage the power of Google\'s Gemini AI to interpret complex commands and generate solutions.',
    color: 'green'
  },
  {
    icon: 'Lock',
    title: 'Privacy-Focused',
    description: 'Your data remains local and secure. All processing happens on your machine with no data sent to external servers.',
    color: 'cyan'
  },
  {
    icon: 'Zap',
    title: 'Command Automation',
    description: 'Create custom workflows and automate repetitive tasks with simple macros and scripts.',
    color: 'yellow'
  }
];