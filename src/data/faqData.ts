interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: 'What is Datash?',
    answer: 'Datash is an intelligent terminal assistant for programmers that helps interact with databases, process data, and automate tasks. It combines AI capabilities with a terminal interface to make database operations and shell commands more intuitive and powerful.'
  },
  {
    question: 'Which databases does Datash support?',
    answer: 'Datash supports multiple database systems including MySQL, PostgreSQL, SQLite, and MongoDB. It provides a unified interface for interacting with all these database types using either direct SQL queries or natural language commands.'
  },
  {
    question: 'Does Datash require an internet connection?',
    answer: 'While the core functionality of Datash works offline, some features like the Google Gemini AI integration require an internet connection. You can use basic database operations and shell commands without being connected to the internet.'
  },
  {
    question: 'Is my data secure when using Datash?',
    answer: 'Yes, Datash is designed with privacy in mind. Your database credentials and queries are processed locally on your machine. When using AI features, only the command text (not your actual data) is sent to the AI service for interpretation.'
  },
  {
    question: 'What are the system requirements for running Datash?',
    answer: 'Datash requires Python 3.8 or higher and works on Windows, macOS, and Linux operating systems. We recommend at least 4GB of RAM, with 8GB or more for optimal performance when working with larger datasets.'
  },
  {
    question: 'Can I extend Datash with custom functionality?',
    answer: 'Yes, Datash supports plugins and extensions. You can create custom commands, add support for additional databases, or integrate with other tools. Check the documentation for details on developing extensions for Datash.'
  },
  {
    question: 'How do I get started with Datash?',
    answer: 'To get started, download the Datash package from the Downloads section, install the required dependencies using pip install -r requirements.txt, and run python datash.py to launch the application. The Quick Start guide in the documentation provides more detailed instructions.'
  },
  {
    question: 'Is Datash free to use?',
    answer: 'Yes, Datash is open-source software released under the MIT license. You can use it freely for personal and commercial projects. We welcome contributions to the project through our GitHub repository.'
  }
];