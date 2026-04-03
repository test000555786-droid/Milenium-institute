/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eff8ff',
          100: '#dbeffe',
          200: '#bfe3fd',
          300: '#93d0fc',
          400: '#60b4f9',
          500: '#3b94f5',
          600: '#2575e9',
          700: '#1d5fd6',
          800: '#1e4dac',
          900: '#1e4188',
        },
        teal: {
          50:  '#f0fdfc',
          100: '#ccfbf5',
          200: '#99f6ed',
          300: '#5eead8',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: '#f59e0b',
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card:  '0 4px 24px -4px rgba(37,117,233,0.10)',
        glow:  '0 0 32px 4px rgba(37,117,233,0.18)',
        soft:  '0 8px 48px -8px rgba(0,0,0,0.10)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #eff8ff 0%, #f0fdfc 50%, #fff 100%)',
        'cta-gradient':  'linear-gradient(135deg, #1d5fd6 0%, #0d9488 100%)',
      },
      animation: {
        'float':    'float 6s ease-in-out infinite',
        'shimmer':  'shimmer 2s linear infinite',
        'fade-up':  'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-16px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        fadeUp:  { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
