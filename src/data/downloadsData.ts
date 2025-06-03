interface Download {
  name: string;
  description: string;
  url: string;
  type: 'all' | 'components' | 'utils';
  size: string;
}

export const downloadsData: Download[] = [
  {
    name: 'Datash Complete Package',
    description: 'The full Datash application with all components, utilities, and documentation.',
    url: 'https://github.com/AstridNielsen-lab/Datash/archive/refs/heads/main.zip',
    type: 'all',
    size: '4.2 MB'
  },
  {
    name: 'datash.py',
    description: 'The main application file that serves as the entry point for the Datash terminal assistant.',
    url: 'https://github.com/AstridNielsen-lab/Datash/raw/main/datash.py',
    type: 'components',
    size: '68 KB'
  },
  {
    name: 'db_utilities.py',
    description: 'Database connection and query utilities for MySQL, PostgreSQL, SQLite, and MongoDB.',
    url: 'https://github.com/AstridNielsen-lab/Datash/raw/main/db_utilities.py',
    type: 'components',
    size: '124 KB'
  },
  {
    name: 'api_client.py',
    description: 'Google Gemini API client for natural language processing and command interpretation.',
    url: 'https://github.com/AstridNielsen-lab/Datash/raw/main/api_client.py',
    type: 'components',
    size: '86 KB'
  },
  {
    name: 'command_processor.py',
    description: 'Command parsing and execution module that handles terminal and database commands.',
    url: 'https://github.com/AstridNielsen-lab/Datash/raw/main/command_processor.py',
    type: 'components',
    size: '112 KB'
  },
  {
    name: 'requirements.txt',
    description: 'List of all required Python packages and dependencies for Datash.',
    url: 'https://github.com/AstridNielsen-lab/Datash/raw/main/requirements.txt',
    type: 'utils',
    size: '2 KB'
  },
  {
    name: 'data_transformer.py',
    description: 'Utilities for transforming, processing, and visualizing data from various sources.',
    url: 'https://github.com/AstridNielsen-lab/Datash/raw/main/data_transformer.py',
    type: 'utils',
    size: '95 KB'
  },
  {
    name: 'git_helpers.py',
    description: 'Git repository management helpers and simplified command interfaces.',
    url: 'https://github.com/AstridNielsen-lab/Datash/raw/main/git_helpers.py',
    type: 'utils',
    size: '78 KB'
  },
  {
    name: 'config_template.json',
    description: 'Template configuration file with defaults for customizing Datash behavior.',
    url: 'https://github.com/AstridNielsen-lab/Datash/raw/main/config_template.json',
    type: 'utils',
    size: '4 KB'
  }
];