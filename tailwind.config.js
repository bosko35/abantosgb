/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      colors: {
        'brand-navy': '#1B3A57',
        'brand-green': '#2E7D32',
        'brand-gold': '#D9A441',
        'brand-gray': '#F8F9FA',
        'brand-text': '#212121',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2E7D32 0%, #D9A441 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0f2333 0%, #1B3A57 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
