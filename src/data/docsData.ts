interface CodeExample {
  title: string;
  filename: string;
  code: string;
  explanation: string;
}

interface DocSection {
  category: 'database' | 'shell' | 'git' | 'data';
  title: string;
  description: string;
  examples: CodeExample[];
}

export const docsData: DocSection[] = [
  {
    category: 'database',
    title: 'Database Operations',
    description: 'Interact with databases using natural language commands or direct SQL queries. Datash supports MySQL, PostgreSQL, SQLite, and MongoDB.',
    examples: [
      {
        title: 'Connect to a Database',
        filename: 'database_connect.py',
        code: `# Connect to a PostgreSQL database
datash connect postgres user=admin password=secure host=localhost dbname=myapp

# Connect to MySQL with connection string
datash connect mysql "mysql://user:password@localhost:3306/dbname"

# Connect to SQLite database file
datash connect sqlite /path/to/database.db`,
        explanation: 'Connect to various database types using connection strings or individual parameters.'
      },
      {
        title: 'Execute SQL Queries',
        filename: 'sql_queries.py',
        code: `# Execute a SELECT query
datash query "SELECT * FROM users WHERE age > 21"

# Insert data
datash query "INSERT INTO products (name, price) VALUES ('New Product', 29.99)"

# Use natural language
datash ask "Show me all users who joined last month"`,
        explanation: 'Run SQL queries directly or use natural language to generate and execute queries.'
      },
      {
        title: 'Database Schema Operations',
        filename: 'schema_operations.py',
        code: `# List all tables
datash schema list

# Describe table structure
datash schema describe users

# Create a new table
datash schema create "CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  amount DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW()
)"`,
        explanation: 'View and modify database schema, including table creation and inspection.'
      }
    ]
  },
  {
    category: 'shell',
    title: 'Shell Commands',
    description: 'Execute shell commands with intelligent suggestions and explanations. Datash enhances your terminal experience with AI-powered assistance.',
    examples: [
      {
        title: 'Execute Shell Commands',
        filename: 'shell_commands.py',
        code: `# Run a simple command
datash shell "ls -la"

# Pipe commands
datash shell "find . -name '*.py' | grep 'test'"

# Get explanation for a command
datash explain "awk '{print $1}' file.txt"`,
        explanation: 'Run shell commands directly through Datash, with additional context and help available.'
      },
      {
        title: 'Command History and Search',
        filename: 'command_history.py',
        code: `# Show command history
datash history

# Search history
datash history --search "database"

# Repeat a command by index
datash repeat 5`,
        explanation: 'Access, search, and reuse your command history efficiently.'
      },
      {
        title: 'Command Automation',
        filename: 'automation.py',
        code: `# Create a macro
datash macro create backup_db "pg_dump -U postgres myapp > backups/myapp_$(date +%Y%m%d).sql"

# Run the macro
datash macro run backup_db

# Schedule a recurring command
datash schedule "backup_db" --daily --at "02:00"`,
        explanation: 'Create macros and schedule recurring commands to automate repetitive tasks.'
      }
    ]
  },
  {
    category: 'git',
    title: 'Git Operations',
    description: 'Manage your Git repositories with simplified commands and helpful explanations. Datash makes Git operations more intuitive.',
    examples: [
      {
        title: 'Basic Git Operations',
        filename: 'git_basics.py',
        code: `# Check status with explanation
datash git status

# Stage and commit in one command
datash git commit "Add new feature X" --files="src/feature-x/*"

# View commit history with visualization
datash git log --visual`,
        explanation: 'Perform common Git operations with additional context and simplified syntax.'
      },
      {
        title: 'Branch Management',
        filename: 'git_branches.py',
        code: `# Create and switch to a new branch
datash git branch create feature/user-auth

# List branches with details
datash git branch list --verbose

# Smart merge with conflict resolution assistance
datash git merge develop --smart-resolve`,
        explanation: 'Manage branches and handle merges with intelligent conflict resolution assistance.'
      },
      {
        title: 'Repository Analysis',
        filename: 'git_analysis.py',
        code: `# Analyze repository structure
datash git analyze structure

# Find code ownership
datash git blame "src/main.py" --summary

# Generate contribution statistics
datash git stats --authors --timeline`,
        explanation: 'Analyze repository structure, history, and contributor statistics.'
      }
    ]
  },
  {
    category: 'data',
    title: 'Data Processing',
    description: 'Process, transform, and visualize data directly from the terminal. Datash provides powerful data manipulation capabilities.',
    examples: [
      {
        title: 'Data Import and Export',
        filename: 'data_io.py',
        code: `# Import CSV to database
datash import csv data.csv --table=users --db=myapp

# Export query results to JSON
datash export json "SELECT * FROM orders" --output=orders.json

# Convert between formats
datash convert orders.csv --to=xlsx --output=orders.xlsx`,
        explanation: 'Import data from various formats into databases and export query results to different file formats.'
      },
      {
        title: 'Data Transformation',
        filename: 'data_transform.py',
        code: `# Filter CSV data
datash transform data.csv --filter="age > 30" --output=filtered.csv

# Join data from multiple sources
datash join users.csv orders.csv --on="user_id" --output=user_orders.csv

# Apply custom transformations
datash transform data.csv --apply="total = price * quantity" --output=calculated.csv`,
        explanation: 'Filter, join, and transform data using simple commands without writing complex scripts.'
      },
      {
        title: 'Data Visualization',
        filename: 'data_viz.py',
        code: `# Generate a bar chart
datash visualize "SELECT category, COUNT(*) FROM products GROUP BY category" --type=bar

# Create a time series plot
datash visualize orders.csv --x=date --y=amount --type=line

# Export visualization to file
datash visualize data.csv --type=scatter --x=x --y=y --output=plot.png`,
        explanation: 'Create visualizations directly from query results or data files without additional tools.'
      }
    ]
  }
];