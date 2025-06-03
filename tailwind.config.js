/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00F0FF',
        'neon-pink': '#FF0099',
        'neon-purple': '#AD00FF',
        'neon-green': '#00FF9F',
        'slate': {
          800: '#1E293B',
          900: '#0D0E12',
        }
      },
      boxShadow: {
        'neon-sm': '0 0 5px rgba(0, 240, 255, 0.3)',
        'neon-md': '0 0 15px rgba(0, 240, 255, 0.5)',
        'neon-lg': '0 0 25px rgba(0, 240, 255, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          from: {
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00F0FF, 0 0 20px #00F0FF',
          },
          to: {
            textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00F0FF, 0 0 40px #00F0FF',
          },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'cyber-grid': '40px 40px',
      },
    },
  },
  plugins: [],
};